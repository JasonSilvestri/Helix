import { hideBin } from 'yargs/helpers';
import yargs from 'yargs';
import { readFile, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { validateAll, GateCheck, loadSchemas } from './lib/schema.js';
import { listKnownFiles } from './lib/util.js';

type Manifest = {
    envelope_hash?: string;
    proposal_hashes?: Record<string, string>;
    results_hashes?: Record<string, string>;
    decision_hashes?: Record<string, string>;
    gate_policy_hash?: string;
    generated_at: string;
};

async function sha256(path: string) {
    const buf = await readFile(path);
    const h = createHash('sha256'); h.update(buf);
    return `sha256-${h.digest('hex')}`;
}

async function buildManifest(root: string): Promise<Manifest> {
    const paths = await listKnownFiles(root);
    const manifest: Manifest = {
        generated_at: new Date().toISOString(),
        proposal_hashes: {}, results_hashes: {}, decision_hashes: {}
    };
    if (paths.envelope) manifest.envelope_hash = await sha256(paths.envelope);
    if (paths.gatePolicy) manifest.gate_policy_hash = await sha256(paths.gatePolicy);
    for (const p of paths.proposals) manifest.proposal_hashes![p] = await sha256(p);
    for (const r of paths.results) manifest.results_hashes![r] = await sha256(r);
    for (const d of paths.decisions) manifest.decision_hashes![d] = await sha256(d);
    return manifest;
}

async function cmdValidate(root: string) {
    const schemas = await loadSchemas();
    const report = await validateAll(root, schemas);
    if (report.errors.length) {
        console.error('❌ Validation failed:\n');
        for (const e of report.errors) console.error(`- [${e.kind}] ${e.path}\n  ${e.message}`);
        process.exit(1);
    }
    console.log('✅ All JSON contracts valid.');
}

async function cmdGate(root: string) {
    const schemas = await loadSchemas();
    const report = await validateAll(root, schemas);
    if (report.errors.length) {
        console.error('❌ Validation errors block gate evaluation.');
        process.exit(1);
    }
    const gc = new GateCheck();
    const paths = await listKnownFiles(root);
    if (!paths.gatePolicy) {
        console.error('❌ No gate-policy.json found.');
        process.exit(1);
    }
    const policy = JSON.parse(await readFile(paths.gatePolicy, 'utf-8'));
    let violations = 0;
    for (const r of paths.results) {
        const res = JSON.parse(await readFile(r, 'utf-8'));
        const ok = gc.evaluate(policy, res);
        console.log(`${ok ? '✅' : '❌'} Gate check for results: ${r}`);
        if (!ok) violations++;
    }
    if (violations) process.exit(1);
}

async function cmdManifest(root: string) {
    const out = await buildManifest(root);
    const path = join(root, 'manifest.json');
    await writeFile(path, JSON.stringify(out, null, 2), 'utf-8');
    console.log(`📝 Wrote manifest: ${path}`);
}

await yargs(hideBin(process.argv))
    .command('validate', 'Validate JSON contracts', y => y.option('root', { type: 'string', demandOption: true }),
        argv => cmdValidate(resolve(String(argv.root))))
    .command('gate', 'Evaluate gate-policy against results', y => y.option('root', { type: 'string', demandOption: true }),
        argv => cmdGate(resolve(String(argv.root))))
    .command('manifest', 'Write manifest.json with SHA-256 hashes', y => y.option('root', { type: 'string', demandOption: true }),
        argv => cmdManifest(resolve(String(argv.root))))
    .demandCommand().strict().help().parse();