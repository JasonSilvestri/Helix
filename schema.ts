import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SCHEMA_DIR = join(__dirname, '../../../schemas');

export type Schemas = { envelope: any, proposal: any, results: any, decision: any, gate: any };

export async function loadSchemas(): Promise<Schemas> {
    const [envelope, proposal, results, decision, gate] = await Promise.all([
        readFile(join(SCHEMA_DIR, 'envelope.schema.json'), 'utf-8'),
        readFile(join(SCHEMA_DIR, 'proposal.schema.json'), 'utf-8'),
        readFile(join(SCHEMA_DIR, 'results.schema.json'), 'utf-8'),
        readFile(join(SCHEMA_DIR, 'decision.schema.json'), 'utf-8'),
        readFile(join(SCHEMA_DIR, 'gate-policy.schema.json'), 'utf-8')
    ]);
    return {
        envelope: JSON.parse(envelope),
        proposal: JSON.parse(proposal),
        results: JSON.parse(results),
        decision: JSON.parse(decision),
        gate: JSON.parse(gate),
    };
}

export async function validateAll(root: string, schemas: Schemas) {
    const ajv = new Ajv({ allErrors: true, strict: false });
    addFormats(ajv);
    const validators = {
        envelope: ajv.compile(schemas.envelope),
        proposal: ajv.compile(schemas.proposal),
        results: ajv.compile(schemas.results),
        decision: ajv.compile(schemas.decision),
        gate: ajv.compile(schemas.gate)
    };
    const { envelope, gatePolicy, proposals, results, decisions } = await (await import('./util.js')).listKnownFiles(root);
    const errors: { kind: string; path: string; message: string }[] = [];

    async function check(kind: string, path: string, validate: any) {
        const data = JSON.parse(await readFile(path, 'utf-8'));
        const ok = validate(data);
        if (!ok) for (const err of validate.errors ?? []) {
            errors.push({ kind, path, message: `${err.instancePath} ${err.message}`.trim() });
        }
    }

    try { await check('envelope', envelope, validators.envelope); } catch (e: any) { errors.push({ kind: 'envelope', path: envelope, message: e.message }); }
    if (gatePolicy) try { await check('gate-policy', gatePolicy, validators.gate); } catch (e: any) { errors.push({ kind: 'gate-policy', path: gatePolicy, message: e.message }); }
    for (const p of proposals) try { await check('proposal', p, validators.proposal); } catch (e: any) { errors.push({ kind: 'proposal', path: p, message: e.message }); }
    for (const r of results) try { await check('results', r, validators.results); } catch (e: any) { errors.push({ kind: 'results', path: r, message: e.message }); }
    for (const d of decisions) try { await check('decision', d, validators.decision); } catch (e: any) { errors.push({ kind: 'decision', path: d, message: e.message }); }
    return { errors };
}

export class GateCheck {
    private evalExpr(obj: any, expr: string): boolean {
        const m = expr.match(/^([\w\.]+)\s*(<=|>=|<|>|==)\s*([-+]?\d+(\.\d+)?|\w+)$/);
        if (!m) return false;
        const [, path, op, raw] = m;
        const val = path.split('.').reduce((o, k) => o?.[k], obj);
        const rhs = isNaN(Number(raw)) ? raw : Number(raw);
        switch (op) {
            case '<=': return val <= rhs;
            case '>=': return val >= rhs;
            case '<': return val < rhs;
            case '>': return val > rhs;
            case '==': return val == rhs;
            default: return false;
        }
    }
    evaluate(policy: any, resultsObj: any): boolean {
        const runs = resultsObj.runs ?? [];
        for (const run of runs) {
            for (const rule of policy.must_pass ?? []) if (!this.evalExpr(run, rule)) return false;
            for (const cr of policy.confidence_rules ?? []) if (!this.evalExpr(run, cr)) return false;
            const vlen = (run.violations ?? []).length;
            const blocked = (policy.blocked_if ?? []).some((r: string) => {
                if (r === 'violations.length > 0') return vlen > 0;
                return this.evalExpr(run, r);
            });
            if (blocked) return false;
        }
        return true;
    }
}