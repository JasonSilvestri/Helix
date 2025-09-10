import { readFile } from "node:fs/promises";
import { join } from "node:path";
import glob from "glob";

async function main() {
    const glossary = JSON.parse(await readFile("docs/glossary.json", "utf8"));
    const files = glob.sync("**/*.md", { ignore: ["node_modules/**"] });
    const errors: string[] = [];

    for (const f of files) {
        const text = await readFile(f, "utf8");
        for (const [canonical, synonyms] of Object.entries(glossary.canonical)) {
            for (const syn of synonyms as string[]) {
                const regex = new RegExp(`\\b${syn}\\b`, "gi");
                if (regex.test(text) && syn !== canonical) {
                    errors.push(`${f}: term "${syn}" → use "${canonical}"`);
                }
            }
        }
        for (const [bad, fix] of Object.entries(glossary.disallow)) {
            const regex = new RegExp(`\\b${bad}\\b`, "gi");
            if (regex.test(text)) {
                errors.push(`${f}: disallowed "${bad}" → use "${fix}"`);
            }
        }
    }

    if (errors.length) {
        console.error("❌ Glossary drift detected:");
        for (const e of errors) console.error(" - " + e);
        process.exit(1);
    } else {
        console.log("✅ Glossary check passed.");
    }
}

main();