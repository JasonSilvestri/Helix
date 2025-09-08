import { readdir } from 'node:fs/promises';
import { join } from 'node:path';

export async function listKnownFiles(root: string) {
    const envelope = join(root, 'envelope.json');
    const gatePolicy = join(root, 'gate-policy.json');
    const proposalsDir = join(root, 'proposals');
    const resultsDir = join(root, 'results');
    const decisionsDir = join(root, 'decisions');

    const proposals: string[] = [];
    const results: string[] = [];
    const decisions: string[] = [];

    for (const [dir, bucket] of [[proposalsDir, proposals], [resultsDir, results], [decisionsDir, decisions]] as const) {
        try {
            for (const f of await readdir(dir)) if (f.endsWith('.json')) bucket.push(join(dir, f));
        } catch { }
    }
    return { envelope, gatePolicy, proposals, results, decisions };
}