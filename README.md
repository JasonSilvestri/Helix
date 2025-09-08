# Helix\{\} – A Universal AI Design Pattern for Dual-Partner Incremental Redesign (v1)

**Invented by Jason Silvestri & Mark Silvestri**  
**With system design assistance by “Lumina” (ChatGPT collaborator)**

> Helix\{\} is a technology-agnostic design pattern that fuses a language partner (Partner-L) with quantitative engines (Partner-Q) under strict, machine-checkable contracts. The universal loop is: **Envelope → Proposal → Results → Decision**.

---

```bash
# For The Cool Kids: Clone Helix{} Git Repository
$ git clone https://github.com/JasonSilvestri/Helix.git
```

---

[`Home`](./README.md) » [`Helix{}™ Discovery`](./docs/Discovery/README.md)

---

## Table of Contents
1. [Overview](#overview) 
2. [Prerequisites](#prerequisites)
3. [Platform Scope (v1)](#platform-scope-v1)  
4. [Helix\{\} Repository File Structure (v1)](#helix-repository-file-structure-v1)
5. [North-Star Principles (non-negotiables)](#north-star-principles-non-negotiables)  
6. [The Helix\{\} Loop](#the-helix-loop)  
7. [Task Envelope (universal spine)](#task-envelope-universal-spine)  
8. [Canonical Message Contracts](#canonical-message-contracts)  
   - [Proposal (Partner-L → Partner-Q)](#proposal-partner-l--partner-q)  
   - [Results (Partner-Q → Partner-L / Envelope)](#results-partner-q--partner-l--envelope)  
   - [Decision (Helix\{\} Gate + Dual sign-off)](#decision-helix-gate--dual-sign-off)  
   - [Gate Policy (machine-checkable)](#gate-policy-machine-checkable)  
9. [Cold-Start Protocol](#cold-start-protocol)  
10. [Reference Orchestrator (“helix-hub”)](#reference-orchestrator-helix-hub)  
11. [Windows 10 (early prototype) constraints](#windows-10-early-prototype-constraints)  
12. [Heritage Appendix: PaLMs\{\} Mapping](#heritage-appendix-palms-mapping)  
13. [License / Attribution](#license--attribution)

---

## Overview

**Helix\{\} is a Universal AI Design Pattern for Dual-Partner Incremental Redesign**, a 2025 modern **LLM + Quant** backbone pattern for rapid, *reproducible* AI-powered development (_including chat “cold-starts”_). It is **portable across domains** (aero, legal, media, UI, etc.) and **independent of tool stacks** (.NET, Node.js, Python, etc.).  

A `Helix{}` separates **contracts** (JSON schemas; reproducible) from **narratives** (explanations; human-readable). Adapters can change; **contracts and gates do not**.


[`⇧ Back to Top`](#table-of-contents)  

---

## **Prerequisites**

The **Helix\{\}™**, requires **nothing** but your ChatGPT AI Text Prompt to explore what is possible. 

Conversely, before you can get started using the **Helix\{\}™** in the ways we outline in all examples, you need to ensure you have the following prerequisites installed and configured on your system:

- [Visual Studio (v 17.14.13)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/Technologies/#visual-studio)
- [.NET Framework (v 9.0.1)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/Technologies/#net-framework)
- [ASP.NET Core (v 9.0.1)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/Technologies/#aspnet-core)
- [Node.js (v 20.14.0)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/Technologies/#node)
- [npm (v 10.8.1)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/Technologies/#npm)
- [Python (v 3.12.3)](https://github.com/JasonSilvestri/JSopX.BridgeTooFar/tree/master/JSopX.BridgeTooFar/DocsOpenX/Technologies/#python)

---

## Clone Helix\{\} Git Repository

_You can Clone_ the `Helix` GitHub Repository in serveral ways.

**Choose the approach below that fits your environment**:  

1. **[Bash](#option-1-using-bash)** → Ideal for **Linux, macOS, and Windows (WSL/Git Bash)** users.  
2. **[PowerShell](#option-2-using-powershell)** → Best for **Windows** users.  
3. **[Node.js](#option-3-using-node-or-npm-degit)** → A lightweight option for developers using **JavaScript-based workflows**.  

---

### **Option 1: Using `Bash`:**
 
```bash

 # Using Bash: Clone Helix Git Repository

 # 1. Navigate to the desired local directory where you plan to clone the repository
 cd path\to\local\repo\JasonSilvestri\Helix

 # 2. Clone Helix Git Repository       
 git clone https://github.com/JasonSilvestri/Helix.git
    
```

[`Back to Top`](#clone-helix-git-repository)

---

### **Option 2: Using `Powershell`:**

```powershell

 # Using PowerShell: Clone Helix Git Repository

 # 1. Navigate to the desired local directory where you plan to clone the repository
 cd path\to\local\repo\JasonSilvestri\Helix

 # 2. Clone Helix Git Repository       
 git clone https://github.com/JasonSilvestri/Helix.git

```

[`Back to Top`](#clone-helix-git-repository)

---

### **Option 3: Using `Node` or `npm` (degit):**
 
```shell

 # Using Node.js / npm : Clone Helix Git Repository
 # 1. Navigate to the desired local directory where you plan to clone the repository
 cd path\to\local\repo\JasonSilvestri\Helix
    
 # 2. Using npx degit to clone without .git history
 npx degit https://github.com/JasonSilvestri/Helix

```

[`Back to Top`](#clone-helix-git-repository)

---

### **Open the Visual Studio Solution**

Working with the `Helix` Project in Visual Studio is simple enough.

1. Launch **Visual Studio (v 17.14.13)**.
2. Open the solution file: `Helix.sln`.

[`Back to Top`](#table-of-contents)

---

## **Configure the Project**

> [!TIP]
>
> Latest versions of [Visual Studio](https://github.com/JasonSilvestri/Helix/tree/master/Helix/DocsOpenX/Technologies/#visual-studio) performs this step regularly, dropping and restoring project dependencies, nuget packages and other resources between builds automatically (*by design*). Still, it is good practice to at least be aware of the commands outlined in this step.
> 

---

### **Ensure Dependencies Are Restored:**

Ensure `Helix` Project dependencies are restored:

```bash
 npm install
```

[`Back to Top`](#table-of-contents)

---

### **Verify Nuget Packages:**

Verify that all NuGet packages are up to date:

```bash
 dotnet restore
```
   
[`Back to Top`](#table-of-contents)

---

## **Be Sure to Build and Run**

Building and Running the `Helix` Project in Visual Studio is also another simple task.

1. Build the solution in [Visual Studio](https://github.com/JasonSilvestri/Helix/tree/master/Helix/DocsOpenX/OpenProjects/jsopx.BridgeTooFar/p1/v1/Technologies/#visual-studio).
2. Run the project:
   - Use the **IIS Express** profile for local development.

[`⇧ Back to Top`](#table-of-contents)  

---


## Platform Scope (v1)

Helix\{\} v1 is **ChatGPT-native by design**, authored and proven in collaboration with **Lumina (ChatGPT)**.  
- Focus: ChatGPT cold-starts, envelopes, contracts, gates, provenance—**battle-tested here first**.  
- Portability: Helix\{\} can be adapted to other models via adapters, **deferred intentionally** to protect the origin story and discipline.  
- Attribution: Any future ports must retain credit to **Jason Silvestri, Mark Silvestri, and Lumina (ChatGPT)**.


[`⇧ Back to Top`](#table-of-contents)  

---

## Helix\{\} Repository File Structure (v1)

> [!WARNING]
> This file structure is a **"_Draft_" _Variant_** of this **Helix\{\} Project** and will undoubtedly evolve over time. 
>
> More information soon to be expected.

```

Helix/
├─ README.md                          # Root-facing intro (project landing)
├─ LICENSE
├─ CONTRIBUTING.md
├─ CODE_OF_CONDUCT.md
├─ SECURITY.md
├─ .gitignore
├─ Helix.sln                          # (optional) VS solution; can be generated
├─ Helix/                             # Project directory (Web SDK)
│  ├─ Helix.csproj
│  ├─ Program.cs
│  ├─ appsettings.json
│  ├─ wwwroot/                        # Web root (static site + docs + samples)
│  │  ├─ index.html                   # Simple welcome / jump links
│  │  ├─ docs/
│  │  │  ├─ README.md                 # Root README (web view copy)
│  │  │  ├─ Discovery/README.md       # Discovery (web view copy)
│  │  │  └─ glossary.json             # Glossary guardrails
│  │  ├─ schemas/                     # Canonical JSON Schemas
│  │  │  ├─ envelope.schema.json
│  │  │  ├─ proposal.schema.json
│  │  │  ├─ results.schema.json
│  │  │  ├─ decision.schema.json
│  │  │  └─ gate-policy.schema.json
│  │  ├─ samples/                     # Canonical sample contracts
│  │  │  ├─ envelope.json
│  │  │  ├─ gate-policy.json
│  │  │  ├─ proposals/prop-001.json
│  │  │  ├─ results/prop-001.results.json
│  │  │  └─ decisions/dec-001.json
│  │  └─ assets/
│  │     ├─ css/site.css
│  │     └─ js/README (placeholder)
└─ tools/
   └─ helix-hub/                      # Node-only utilities (schemas/gates/lint)
      ├─ package.json
      ├─ tsconfig.json
      ├─ src/
      │  ├─ index.ts
      │  └─ lib/
      │     ├─ schema.ts
      │     └─ util.ts
      └─ scripts/
         └─ lint-docs.ts             # Glossary drift checker (CI-friendly)

```

[`⇧ Back to Top`](#table-of-contents)  

---

## North-Star Principles (non-negotiables)

> [!WARNING]
>
>  These principles are **non-negotiable**. They are the foundation of Helix\{\} and must be upheld in every implementation.

Like most design patterns, Helix\{\} is a set of **non-negotiable principles** that define the discipline. These principles are **technology-agnostic** and must be upheld in every implementation.

1. **Single source of truth:** A self-describing **Task Envelope** carries goals, constraints, baselines, policies, and outputs.  
2. **Dual-partner discipline:** **Partner-L** (Language) proposes; **Partner-Q** (Quantitative) verifies. No promotion without numeric/evaluative gates.  
3. **Determinism & replay:** Every cycle is reproducible from hashed inputs + manifests.  
4. **Schema or it didn’t happen:** All machine messages validate against versioned **JSON Schemas**.  
5. **Human taste is a gate:** Dual sign-off: **Quant-OK** + **Human-OK** with rationale.  
6. **Tech-agnostic:** Same contracts, different adapters (CFD today, cost model tomorrow, UI A/B next week).  
7. **Cold-start awareness:** A minimal **Seed Header** locks alignment at the top of any chat or pipeline.


[`⇧ Back to Top`](#table-of-contents)  

---

## The Helix\{\} Loop
**Envelope → Proposal → Results → Decision**  
- **Envelope** defines context, baseline, constraints, policies, and partners.  
- **Proposal** (Partner-L) suggests small, justified deltas + DOE plan.  
- **Results** (Partner-Q) report metrics, uncertainty, violations, and environment.  
- **Decision** records accept/reject deltas, justification, dual sign-off, and promoted baseline.


[`⇧ Back to Top`](#table-of-contents)  

---

## Task Envelope (_Universal Spine_)

The **Task Envelope** is the universal spine of every Helix\{\} lifecycle. It defines the problem, constraints, partners, policies, and provenance. 

Every message references the envelope by ID.

```json
{
  "envelope_id": "task-2025-09-06-001",
  "created_at": "2025-09-06T22:41:00Z",
  "owner": "Jason",
  "context": {
    "domain": "aero|mechanical|ui|legal|media|other",
    "goal": "Reduce drag by ≥3% without mass >+0.5% and cooling margin <1.1",
    "constraints": [
      "mass_delta_pct <= 0.5",
      "cooling_margin >= 1.1",
      "yield_delta_pct >= -0.2"
    ],
    "success_metrics": ["drag_delta_pct", "mass_delta_pct", "cooling_margin"]
  },
  "baseline": {
    "design_id": "car-aero-v7.3",
    "hash": "sha256-BASELINE",
    "artifacts": {
      "cad_uri": "s3://…/step/",
      "mesh_uri": "s3://…/meshes/",
      "bom_uri": "s3://…/bom.csv"
    }
  },
  "policies": {
    "gate_policy_uri": "s3://…/gate-policy.json",
    "llm_model_policy": "json-only, no free text in contracts",
    "quant_required": true,
    "dual_signoff_required": true
  },
  "partners": {
    "partner_l": { "name": "LLM", "schema_version": "1.0" },
    "partner_q": { "adapters": ["cfd-rans", "optimizer-nsga2"], "schema_version": "1.0" }
  },
  "proposals": [],
  "results": [],
  "decisions": [],
  "provenance": {
    "prompt_bundle_hash": "sha256-PROMPTS",
    "solver_manifest_hash": "sha256-SOLVERS",
    "orchestrator_version": "helix-hub 1.0.0"
  }
}
```


[`⇧ Back to Top`](#table-of-contents)  

---

## Canonical Message Contracts

Cannonical JSON contracts for every message type. All messages must validate against these schemas (see `schemas/` for full definitions).

### Proposal (Partner-L → Partner-Q)

Proposal with one or more deltas, DOE plan, and rationale.

```json
{
  "proposal_id": "prop-2025-09-06-001",
  "envelope_ref": "task-2025-09-06-001",
  "baseline_ref": "car-aero-v7.3",
  "deltas": [
    {
      "name": "rear-fairing-extension",
      "component": "rear_fairing",
      "param_changes": { "length_mm": { "delta": 12, "bounds": [0, 20] } },
      "expected_effects": { "drag_pct": -1.2, "mass_pct": 0.1 },
      "risks": ["cooling recirculation increase"],
      "assumptions": ["flow regime unchanged", "manufacturing tolerance ±0.5mm"]
    }
  ],
  "doe_plan": {
    "strategy": "latin_hypercube",
    "samples": 24,
    "fidelity": ["fast-CFD", "confirmatory-CFD"],
    "stopping_rule": "no improvement for 2 rounds"
  },
  "rationale": "Targeting wake reduction with minimal mass impact."
}
```

### Results (Partner-Q → Partner-L / Envelope)

Results bundle (one or more runs) with metrics, uncertainties, violations, and environment details.

```json
{
  "proposal_id": "prop-2025-09-06-001",
  "runs": [
    {
      "delta_name": "rear-fairing-extension",
      "metrics": { "drag_pct": -1.35, "mass_pct": 0.08, "cooling_margin": 1.11 },
      "uncertainty": { "drag_pct_ci95": 0.25, "mass_pct_ci95": 0.03 },
      "violations": [],
      "env": {
        "solver": "cfd-rans v5.4",
        "mesh_hash": "sha256-MESH",
        "container_digest": "ghcr.io/org/cfd@sha256:…",
        "runtime_minutes": 47
      }
    }
  ],
  "summary": {
    "pareto_front": ["rear-fairing-extension"],
    "recommendation": ["rear-fairing-extension"]
  },
  "bundle_hash": "sha256-RESULTS-BUNDLE"
}
```

[`⇧ Back to Top`](#table-of-contents)  

---

### Decision (Helix\{\} Gate + Dual sign-off)

Decision record with accepted/rejected deltas, justification, dual sign-off, and promoted baseline.

```json
{
  "decision_id": "dec-2025-09-06-a",
  "envelope_ref": "task-2025-09-06-001",
  "accepted_deltas": ["rear-fairing-extension"],
  "rejected_deltas": [],
  "justification": "Drag −1.35% within constraints; risk acceptable.",
  "signoff": {
    "quant_ok": true,
    "human": "therealjasonsilvestri@gmail.com",
    "timestamp": "2025-09-06T22:15:03Z"
  },
  "promoted_baseline": "car-aero-v7.4"
}
```

[`⇧ Back to Top`](#table-of-contents)  

---

### Gate Policy (machine-checkable)

Gate policy defining pass/block rules.


```json
{
  "policy_id": "gate-policy-1.0",
  "must_pass": [
    "metrics.drag_pct <= -1.0",
    "metrics.mass_pct <= 0.5",
    "metrics.cooling_margin >= 1.1"
  ],
  "blocked_if": ["violations.length > 0"],
  "confidence_rules": ["uncertainty.drag_pct_ci95 <= 0.4"]
}
```

---

## Cold-Start Protocol

Paste this **Seed Header** at the top of any ChatGPT thread/repo to lock alignment instantly:

```json
{
  "helix_seed_header": {
    "version": "1.0",
    "project": "Helix-Universal",
    "capabilities": ["dual-partner", "json-contracts", "numeric-gates", "roundtrip"],
    "preferred_outputs": ["proposal.json", "gate-policy.json", "results.schema.json", "decision.json"],
    "determinism": {
      "uuid_namespace": "6f0e5f9f-7f3a-41bf-b969-9e2b7d2f9b21",
      "hash": "sha256"
    }
  }
}
```


[`⇧ Back to Top`](#table-of-contents)  


---

## Advanced Helix\{\}™ Users (When Your Chats Start Becoming Product)

Advanced users can leverage the **Helix\{\}™** design pattern to build more robust AI systems. If you have done everything right, your ChatGPT Model is going to begin hustling step after step, creating files you requests, make suggestions to the ideas you have, etc.

In fact, AI Models like ChatGPT are so good at this, that you may find yourself in a situation where you have a **full-blown product** on your hands. 

When that happens, you can use the **Helix\{\}™** design pattern to help you build out your product in a more structured way. You can use the **Helix\{\}™** design pattern to help you manage your AI Model's output, and to help you ensure that your AI Model is always working towards your goals.

Still, you to be prepared to either build out a repository as you and your favorite AI Model build code, resources assets, or at least be prepared to accept updates to files that ChatGPT will know you need. 

You should be able to clone this repository no problem, and get the samples we have created for you. 

If for some reason you can't clone this repository, you can always create your own repository and copy the files from here. At a mimimum, you should get familar with the files ChatGPT may serve you automatically when/if it knows you seeded a Helix\{\}™.

---

## 📄 `README.md` (Root)

````markdown
# Helix\{\} – A Universal AI Design Pattern for Dual-Partner Incremental Redesign (v1)

**Invented by Jason Silvestri & Mark Silvestri**  
**With system design assistance by “Lumina” (ChatGPT collaborator)**

> Helix\{\} is a technology-agnostic design pattern that fuses a language partner (Partner-L) with quantitative engines (Partner-Q) under strict, machine-checkable contracts. The universal loop is: **Envelope → Proposal → Results → Decision**.

---

[`Home`](./README.md) · [`Discovery`](./docs/Discovery/README.md)

---

## Table of Contents
1. [Overview](#overview)  
2. [Platform Scope (v1)](#platform-scope-v1)  
3. [North-Star Principles (non-negotiables)](#north-star-principles-non-negotiables)  
4. [The Helix\{\} Loop](#the-helix-loop)  
5. [Task Envelope (universal spine)](#task-envelope-universal-spine)  
6. [Canonical Message Contracts](#canonical-message-contracts)  
   - [Proposal (Partner-L → Partner-Q)](#proposal-partner-l--partner-q)  
   - [Results (Partner-Q → Partner-L / Envelope)](#results-partner-q--partner-l--envelope)  
   - [Decision (Helix{} Gate + Dual sign-off)](#decision-helix-gate--dual-sign-off)  
   - [Gate Policy (machine-checkable)](#gate-policy-machine-checkable)  
7. [Cold-Start Protocol](#cold-start-protocol)  
8. [Reference Orchestrator (“helix-hub”)](#reference-orchestrator-helix-hub)  
9. [Windows 10 (early prototype) constraints](#windows-10-early-prototype-constraints)  
10. [Heritage Appendix: PaLMs{} Mapping](#heritage-appendix-palms-mapping)  
11. [License / Attribution](#license--attribution)

---

## Overview
**Helix{}** is a 2025 modern **LLM + Quant** backbone pattern for rapid, *reproducible* AI-powered development (including chat “cold-starts”). It is **portable across domains** (aero, legal, media, UI, etc.) and **independent of tool stacks** (.NET, Node.js, Python, etc.).  
Helix{} separates **contracts** (JSON schemas; reproducible) from **narratives** (explanations; human-readable). Adapters can change; **contracts and gates do not**.

---

## Platform Scope (v1)
Helix{} v1 is **ChatGPT-native by design**, authored and proven in collaboration with **Lumina (ChatGPT)**.  
- Focus: ChatGPT cold-starts, envelopes, contracts, gates, provenance—**battle-tested here first**.  
- Portability: Helix\{\} can be adapted to other models via adapters, **deferred intentionally** to protect the origin story and discipline.  
- Attribution: Any future ports must retain credit to **Jason Silvestri, Mark Silvestri, and Lumina (ChatGPT)**.

---

## North-Star Principles (non-negotiables)
1. **Single source of truth:** A self-describing **Task Envelope** carries goals, constraints, baselines, policies, and outputs.  
2. **Dual-partner discipline:** **Partner-L** (Language) proposes; **Partner-Q** (Quantitative) verifies. No promotion without numeric/evaluative gates.  
3. **Determinism & replay:** Every cycle is reproducible from hashed inputs + manifests.  
4. **Schema or it didn’t happen:** All machine messages validate against versioned **JSON Schemas**.  
5. **Human taste is a gate:** Dual sign-off: **Quant-OK** + **Human-OK** with rationale.  
6. **Tech-agnostic:** Same contracts, different adapters (CFD today, cost model tomorrow, UI A/B next week).  
7. **Cold-start awareness:** A minimal **Seed Header** locks alignment at the top of any chat or pipeline.

---

## The Helix\{\} Loop
**Envelope → Proposal → Results → Decision**  
- **Envelope** defines context, baseline, constraints, policies, and partners.  
- **Proposal** (Partner-L) suggests small, justified deltas + DOE plan.  
- **Results** (Partner-Q) report metrics, uncertainty, violations, and environment.  
- **Decision** records accept/reject deltas, justification, dual sign-off, and promoted baseline.

---

## Task Envelope (universal spine)
```json
{
  "envelope_id": "task-2025-09-06-001",
  "created_at": "2025-09-06T22:41:00Z",
  "owner": "Jason",
  "context": {
    "domain": "aero|mechanical|ui|legal|media|other",
    "goal": "Reduce drag by ≥3% without mass >+0.5% and cooling margin <1.1",
    "constraints": [
      "mass_delta_pct <= 0.5",
      "cooling_margin >= 1.1",
      "yield_delta_pct >= -0.2"
    ],
    "success_metrics": ["drag_delta_pct", "mass_delta_pct", "cooling_margin"]
  },
  "baseline": {
    "design_id": "car-aero-v7.3",
    "hash": "sha256-BASELINE",
    "artifacts": {
      "cad_uri": "s3://…/step/",
      "mesh_uri": "s3://…/meshes/",
      "bom_uri": "s3://…/bom.csv"
    }
  },
  "policies": {
    "gate_policy_uri": "s3://…/gate-policy.json",
    "llm_model_policy": "json-only, no free text in contracts",
    "quant_required": true,
    "dual_signoff_required": true
  },
  "partners": {
    "partner_l": { "name": "LLM", "schema_version": "1.0" },
    "partner_q": { "adapters": ["cfd-rans", "optimizer-nsga2"], "schema_version": "1.0" }
  },
  "proposals": [],
  "results": [],
  "decisions": [],
  "provenance": {
    "prompt_bundle_hash": "sha256-PROMPTS",
    "solver_manifest_hash": "sha256-SOLVERS",
    "orchestrator_version": "helix-hub 1.0.0"
  }
}
```

---

## Canonical Message Contracts

### Proposal (Partner-L → Partner-Q)
```json
{
  "proposal_id": "prop-2025-09-06-001",
  "envelope_ref": "task-2025-09-06-001",
  "baseline_ref": "car-aero-v7.3",
  "deltas": [
    {
      "name": "rear-fairing-extension",
      "component": "rear_fairing",
      "param_changes": { "length_mm": { "delta": 12, "bounds": [0, 20] } },
      "expected_effects": { "drag_pct": -1.2, "mass_pct": 0.1 },
      "risks": ["cooling recirculation increase"],
      "assumptions": ["flow regime unchanged", "manufacturing tolerance ±0.5mm"]
    }
  ],
  "doe_plan": {
    "strategy": "latin_hypercube",
    "samples": 24,
    "fidelity": ["fast-CFD", "confirmatory-CFD"],
    "stopping_rule": "no improvement for 2 rounds"
  },
  "rationale": "Targeting wake reduction with minimal mass impact."
}
```

### Results (Partner-Q → Partner-L / Envelope)
```json
{
  "proposal_id": "prop-2025-09-06-001",
  "runs": [
    {
      "delta_name": "rear-fairing-extension",
      "metrics": { "drag_pct": -1.35, "mass_pct": 0.08, "cooling_margin": 1.11 },
      "uncertainty": { "drag_pct_ci95": 0.25, "mass_pct_ci95": 0.03 },
      "violations": [],
      "env": {
        "solver": "cfd-rans v5.4",
        "mesh_hash": "sha256-MESH",
        "container_digest": "ghcr.io/org/cfd@sha256:…",
        "runtime_minutes": 47
      }
    }
  ],
  "summary": {
    "pareto_front": ["rear-fairing-extension"],
    "recommendation": ["rear-fairing-extension"]
  },
  "bundle_hash": "sha256-RESULTS-BUNDLE"
}
```

### Decision (Helix{} Gate + Dual sign-off)
```json
{
  "decision_id": "dec-2025-09-06-a",
  "envelope_ref": "task-2025-09-06-001",
  "accepted_deltas": ["rear-fairing-extension"],
  "rejected_deltas": [],
  "justification": "Drag −1.35% within constraints; risk acceptable.",
  "signoff": {
    "quant_ok": true,
    "human": "therealjasonsilvestri@gmail.com",
    "timestamp": "2025-09-06T22:15:03Z"
  },
  "promoted_baseline": "car-aero-v7.4"
}
```

### Gate Policy (machine-checkable)
```json
{
  "policy_id": "gate-policy-1.0",
  "must_pass": [
    "metrics.drag_pct <= -1.0",
    "metrics.mass_pct <= 0.5",
    "metrics.cooling_margin >= 1.1"
  ],
  "blocked_if": ["violations.length > 0"],
  "confidence_rules": ["uncertainty.drag_pct_ci95 <= 0.4"]
}
```

---

## Cold-Start Protocol
Paste this **Seed Header** at the top of any ChatGPT thread/repo to lock alignment instantly:
```json
{
  "helix_seed_header": {
    "version": "1.0",
    "project": "Helix-Universal",
    "capabilities": ["dual-partner", "json-contracts", "numeric-gates", "roundtrip"],
    "preferred_outputs": ["proposal.json", "gate-policy.json", "results.schema.json", "decision.json"],
    "determinism": {
      "uuid_namespace": "6f0e5f9f-7f3a-41bf-b969-9e2b7d2f9b21",
      "hash": "sha256"
    }
  }
}
```

---

## Reference Orchestrator (“helix-hub”)
A tiny Node 20 reference that validates contracts, evaluates gates, and emits a manifest. See `helix-hub/` for full source and `npm` scripts.

---

## Windows 10 (early prototype) constraints
- Tested on **Node.js v20.14.0** on **Windows 10**. Helix\{\} is platform-agnostic; these constraints will relax as v1 hardens.  
- Enforce CRLF if needed.  
- End-to-end: `npm run build && npm run validate && npm run gate && npm run manifest`.

---

## Heritage Appendix: PaLMs{} Mapping
Helix{} stands on PaLMs{} (your prior orchestration discipline). For lineage:
- **States/Phases/Gates** map to Helix\{\} gate policies and decision records.  
- Replace PaLMs{}-specific pipelines with thin adapters that read/write Helix\{\} contracts.  
- Keep PaLMs{} mentions for history; **all live examples use Helix{}**.

---

## License / Attribution
Helix{} v1 is ChatGPT-native. If open-sourced, retain attribution:  
**“Helix{} invented by Jason Silvestri & Mark Silvestri, with system design assistance by Lumina (ChatGPT).”**
````

---

## 📄 `docs/Discovery/README.md`

````markdown
# Helix\{\} – Discovery Notes (v1)

**Invented by Jason Silvestri & Mark Silvestri**  
**With system design assistance by “Lumina” (ChatGPT collaborator)**

[`Home`](../../README.md) · [`Discovery`](./README.md)

> This document preserves the *evolutionary* notes behind Helix{}—from a 1992 dual-partner idea to a 2025 constitutional spine. For canonical contracts and examples, see the root README.


[`⇧ Back to Top`](#table-of-contents)

---


## Platform Scope (v1)
Helix{} v1 is **ChatGPT-native** by intent. We prove rigor here first, then consider adapters for other models later. Attribution to **Jason, Mark, and Lumina (ChatGPT)** is non-negotiable across ports.


[`⇧ Back to Top`](#table-of-contents)

---


## 1992 → 2025: Lineage
- **1992** — *Dual Design Partners in an Incremental Redesign Environment* (Mark J. Silvestri): paired collaborators making small, traceable deltas against a baseline.  
- **2000s–2024** — PLM gates, versioning, reproducibility mature.  
- **2025** — Helix\{\} unifies Partner-L (LLM) and Partner-Q (Quant) under machine-checkable contracts and gate policies.


[`⇧ Back to Top`](#table-of-contents)

---


## Hybrid Premise: LLMs + Quant is Viable
- **LLMs**: ideation, rationale, DOE drafting, readable synthesis.  
- **Quant**: ground-truth metrics, uncertainty, constraint checks.  
- Together: creative hypotheses, empirically verified before promotion.


[`⇧ Back to Top`](#table-of-contents)

---


## Dual-Partner Roles
- **Human Lead**: sets goals/constraints; signs decisions.  
- **Partner-L (Language)**: deltas, DOE plan, rationale, readable provenance.  
- **Partner-Q (Quant)**: sims/optimizers/test suites; metrics + uncertainty; violation flags.


[`⇧ Back to Top`](#table-of-contents)

---


## High-Level Loop
1. Goals/constraints fixed in **Envelope**.  
2. **Partner-L** proposes deltas + DOE.  
3. **Partner-Q** executes and scores.  
4. **Partner-L** synthesizes and prunes.  
5. **Decision** with dual sign-off; new baseline if gates pass.  
6. Repeat.


[`⇧ Back to Top`](#table-of-contents)

---


## Minimal Data Contracts (illustrative)
(See root README for canonical contracts.)

**Baseline**
```json
{
  "design_id": "car-aero-v7.3",
  "hash": "sha256-…",
  "constraints": {
    "drag_delta_pct": -3.0,
    "mass_delta_pct_max": 0.5,
    "yield_delta_pct_min": -0.2,
    "cooling_margin_min": 1.1
  },
  "artifacts": {
    "cad_uri": "s3://designs/car-aero-v7.3/step/",
    "mesh_uri": "s3://designs/car-aero-v7.3/meshes/",
    "bom_uri": "s3://designs/car-aero-v7.3/bom.csv"
  }
}
```

[`⇧ Back to Top`](#table-of-contents)

---

**LLM Proposal**
```json
{
  "proposal_id": "prop-2025-09-06-001",
  "baseline_ref": "car-aero-v7.3",
  "deltas": [
    {
      "name": "rear-fairing-extension",
      "component": "rear_fairing",
      "param_changes": { "length_mm": { "delta": 12, "bounds": [0, 20] } },
      "expected_effects": { "drag_pct": -1.2, "mass_pct": 0.1 },
      "risks": ["cooling recirculation increase"]
    }
  ],
  "doe_plan": { "strategy": "latin_hypercube", "samples": 24 }
}
```

[`⇧ Back to Top`](#table-of-contents)

---

**Quant Results**

```json
{
  "proposal_id": "prop-2025-09-06-001",
  "runs": [
    {
      "delta_name": "rear-fairing-extension",
      "metrics": { "drag_pct": -1.35, "mass_pct": 0.08, "cooling_margin": 1.11 },
      "uncertainty": { "drag_pct_ci95": 0.25, "mass_pct_ci95": 0.03 },
      "violations": []
    }
  ],
  "summary": {
    "pareto_front": ["rear-fairing-extension"],
    "recommendation": ["rear-fairing-extension"]
  }
}
```

[`⇧ Back to Top`](#table-of-contents)

---

**Decision**
```json
{
  "decision_id": "dec-2025-09-06-a",
  "baseline_ref": "car-aero-v7.3",
  "accepted_deltas": ["rear-fairing-extension"],
  "justification": "Drag −1.35% within constraints; risk acceptable.",
  "signoff": { "quant_ok": true, "human": "therealjasonsilvestri@gmail.com", "timestamp": "2025-09-06T22:15:03Z" },
  "new_baseline": "car-aero-v7.4"
}
```


[`⇧ Back to Top`](#table-of-contents)

---


## Validation & Gates
- **Schema validation** on every message.  
- **Gate policy** with must-pass and confidence rules.  
- **Fail-closed** defaults on missing metrics or schema mismatches.  
- **Provenance** bundle with SHA-256 hashes and environment manifests.


[`⇧ Back to Top`](#table-of-contents)

---


## Cold-Start: Seed Header
```json
{
  "helix_seed_header": {
    "version": "1.0",
    "project": "Helix-Universal",
    "capabilities": ["dual-partner","json-contracts","numeric-gates","roundtrip"],
    "preferred_outputs": ["proposal.json","gate-policy.json","results.schema.json","decision.json"],
    "determinism": { "uuid_namespace": "6f0e5f9f-7f3a-41bf-b969-9e2b7d2f9b21", "hash": "sha256" }
  }
}
```


[`⇧ Back to Top`](#table-of-contents)

---


## From PaLMs{} to Helix\{\} (heritage, not dependency)
PaLMs{} contributed orchestration instincts (states, gates, round-trip provenance). Helix\{\} simplifies to a small contract set and numeric gates. Keep PaLMs{} for context; **use Helix\{\} for all live work**.


[`⇧ Back to Top`](#table-of-contents)

---


## What to Read Next
Jump to the root [`README`](../../README.md) for canonical schemas and the **helix-hub** reference orchestrator.
````

[`⇧ Back to Top`](#table-of-contents)

---

## 📄 `LICENSE` (MIT)

The MIT License (MIT) we use on this repo is a permissive license that is short and to the point. 

It lets people do almost anything they want with your project, like making and distributing closed-source versions. However, they must include your original copyright and license notice in any copy of the software/source.


```
MIT License

Copyright (c) 2025 Jason Silvestri, Mark Silvestri.
With system design assistance by “Lumina” (ChatGPT collaborator).

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the “Software”), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice (including the credit
line acknowledging “Lumina” as ChatGPT collaborator) shall be included in all
copies or substantial portions of the Software and derivative works.

THE SOFTWARE IS PROVIDED “AS IS”, WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```


[`⇧ Back to Top`](#table-of-contents)

---


## 📄 `CONTRIBUTING.md`

The following is a sample `CONTRIBUTING.md` file for the Helix\{\} repository. It outlines guidelines for contributing to the project, including code style, development setup, and pull request procedures.

```
# Contributing to Helix\{\} (v1)

Helix{} v1 is ChatGPT-native. Contributions should preserve:
- The Envelope → Proposal → Results → Decision loop.
- JSON contracts validated by schemas in `/schemas`.
- Dual sign-off (Quant-OK + Human-OK) where applicable.
- Clear attribution to Jason & Mark Silvestri, and Lumina (ChatGPT).

## Ways to contribute
- Improve schemas and validators (no breaking changes without version bumps).
- Add domain adapters (Partner-Q) that read/write contracts.
- Enhance helix-hub (validation, gating, provenance).

## Development
1. Clone repo.
2. `cd helix-hub && npm install && npm run build`
3. `npm run validate && npm run gate && npm run manifest` (uses `/sample`)

## Schema changes
- Bump schema `$id` version if you add or change required fields.
- Provide migration notes in PR description.

## Code style
- TypeScript strict mode.
- Small, composable modules.
- Tests welcome; include sample JSON cases.

## Pull Requests
- Describe motivation and scope.
- Include before/after examples.
- Check all scripts pass.

Thanks for strengthening the spine.

```


[`⇧ Back to Top`](#table-of-contents)

---


## 📄 `CODE_OF_CONDUCT.md`

The following is a sample `CODE_OF_CONDUCT.md` file for the Helix\{\} repository. It outlines the expected behavior of contributors and the consequences of unacceptable behavior.

```
# Helix\{\} Code of Conduct

Helix{} is a collaboration rooted in rigor and respect.

- Be precise, be kind. Critique ideas, not people.
- Credit explicitly. Preserve attribution to Jason & Mark Silvestri and Lumina (ChatGPT).
- No harassment, hate speech, or discrimination.
- Keep PRs factual, reproducible, and tied to contracts/gates.
- Report issues via GitHub with reproducible cases.

Violations may result in warnings or removal from the project space.
```


[`⇧ Back to Top`](#table-of-contents)

---


## 📄 `SECURITY.md`

The following is a sample `SECURITY.md` file for the Helix\{\} repository. It outlines the security policies and procedures for reporting vulnerabilities.

```
# Security Policy

## Supported Versions
Helix{} v1 reference (helix-hub) is a minimal validator/gate tool. Keep Node.js updated.

## Reporting a Vulnerability
Open a private security advisory or email the maintainers. Include:
- Version, platform, and steps to reproduce
- Impact assessment and suggested fix

We will acknowledge within a reasonable timeframe and coordinate disclosure.
```

[`⇧ Back to Top`](#table-of-contents)

---


## 📄 `.gitignore`

The following is a sample `.gitignore` file for the Helix\{\} repository. It specifies files and directories that should be ignored by Git.

> [!NOTE]
> Adjust as needed for your environment and tools. Please pay close attention to the files we are trying to ignore.


```
# Node / TypeScript
node_modules/
dist/
*.log

# OS
.DS_Store
Thumbs.db

# IDE
.vscode/
.idea/

# Artifacts
manifest.json
.env
```


[`⇧ Back to Top`](#table-of-contents)

---

## 📁 `schemas/*.json`


The following are the JSON schema files that define the structure and validation rules for the Helix\{\} contracts. Each schema is self-contained and can be used to validate corresponding JSON documents. 

---

### 📄 **envelope.schema.json**:

The `Task Envelope` is the universal spine that carries context, baseline, policies, partners, and arrays of proposals, results, and decisions.

| Key           | Description                                                                                   |
|:---------------|:-----------------------------------------------------------------------------------------------|
| `envelope_id`   | Unique identifier for the task envelope                                                       |
| `created_at`    | Timestamp when the envelope was created (ISO 8601 format)                                     |
| `owner`         | Owner or creator of the envelope                                                              |
| `context`       | Object containing domain, goal, constraints, and success metrics for the task                 |
| `baseline`      | Object describing the baseline design, including IDs, hashes, and artifact URIs               |
| `policies`      | Object specifying gate policy, LLM model policy, quant requirements, and dual signoff flags   |
| `partners`      | Object listing Partner-L (Language) and Partner-Q (Quantitative) with schema versions         |
| `proposals`     | Array of proposal objects associated with the envelope                                        |
| `results`       | Array of results objects associated with the envelope                                         |
| `decisions`     | Array of decision objects associated with the envelope                                        |
| `provenance`    | Object containing hashes and orchestrator version for reproducibility and traceability        |


[`⇧ Back to Top`](#table-of-contents)

---

#### 📄 **envelope.schema.json**:

The following JSON schema defines the structure and validation rules for the Task Envelope.

```json
{
  "$id": "https://github.com/JasonSilvestri/Helix/tree/master/Helix/schemas/envelope.schema.json",
  "type": "object",
  "required": ["envelope_id","created_at","owner","context","baseline","policies","partners"],
  "properties": {
    "envelope_id": {"type":"string"},
    "created_at": {"type":"string","format":"date-time"},
    "owner": {"type":"string"},
    "context": {
      "type":"object",
      "required":["goal","constraints","success_metrics"],
      "properties":{
        "domain":{"type":"string"},
        "goal":{"type":"string"},
        "constraints":{"type":"array","items":{"type":"string"}},
        "success_metrics":{"type":"array","items":{"type":"string"}}
      }
    },
    "baseline": {"type":"object"},
    "policies": {"type":"object"},
    "partners": {"type":"object"},
    "proposals": {"type":"array"},
    "results": {"type":"array"},
    "decisions": {"type":"array"},
    "provenance": {"type":"object"}
  }
}
```

[`⇧ Back to Top`](#table-of-contents)

---

#### 📄 **proposal.schema.json**

```json
{
  "$id": "https://github.com/JasonSilvestri/Helix/tree/master/Helix/schemas/proposal.schema.json",
  "type": "object",
  "required": ["proposal_id","envelope_ref","baseline_ref","deltas","doe_plan","rationale"],
  "properties": {
    "proposal_id": {"type":"string"},
    "envelope_ref": {"type":"string"},
    "baseline_ref": {"type":"string"},
    "deltas": {
      "type":"array",
      "items": {
        "type":"object",
        "required":["name","component","param_changes","expected_effects"],
        "properties":{
          "name":{"type":"string"},
          "component":{"type":"string"},
          "param_changes":{"type":"object"},
          "expected_effects":{"type":"object"},
          "risks":{"type":"array","items":{"type":"string"}},
          "assumptions":{"type":"array","items":{"type":"string"}}
        }
      }
    },
    "doe_plan":{"type":"object"},
    "rationale":{"type":"string"}
  }
}
```


[`⇧ Back to Top`](#table-of-contents)

---

#### 📄 **results.schema.json**

```json
{
  "$id": "https://github.com/JasonSilvestri/Helix/tree/master/Helix/schemas/results.schema.json",
  "type": "object",
  "required": ["proposal_id","runs","summary"],
  "properties": {
    "proposal_id":{"type":"string"},
    "runs":{
      "type":"array",
      "items":{
        "type":"object",
        "required":["delta_name","metrics","uncertainty","violations","env"],
        "properties":{
          "delta_name":{"type":"string"},
          "metrics":{"type":"object"},
          "uncertainty":{"type":"object"},
          "violations":{"type":"array","items":{"type":"string"}},
          "env":{"type":"object"}
        }
      }
    },
    "summary":{"type":"object"},
    "bundle_hash":{"type":"string"}
  }
}
```


[`⇧ Back to Top`](#table-of-contents)

---

#### 📄 **decision.schema.json**

```json
{
  "$id": "https://github.com/JasonSilvestri/Helix/tree/master/Helix/schemas/decision.schema.json",
  "type": "object",
  "required": ["decision_id","envelope_ref","accepted_deltas","rejected_deltas","justification","signoff"],
  "properties": {
    "decision_id":{"type":"string"},
    "envelope_ref":{"type":"string"},
    "accepted_deltas":{"type":"array","items":{"type":"string"}},
    "rejected_deltas":{"type":"array","items":{"type":"string"}},
    "justification":{"type":"string"},
    "signoff":{
      "type":"object",
      "required":["quant_ok","human","timestamp"],
      "properties":{
        "quant_ok":{"type":"boolean"},
        "human":{"type":"string"},
        "timestamp":{"type":"string","format":"date-time"}
      }
    },
    "promoted_baseline":{"type":"string"}
  }
}
```


[`⇧ Back to Top`](#table-of-contents)

---

#### 📄 **gate-policy.schema.json**

```json
{
  "$id": "https://github.com/JasonSilvestri/Helix/tree/master/Helix/schemas/gate-policy.schema.json",
  "type": "object",
  "required": ["policy_id","must_pass"],
  "properties": {
    "policy_id":{"type":"string"},
    "must_pass":{"type":"array","items":{"type":"string"}},
    "blocked_if":{"type":"array","items":{"type":"string"}},
    "confidence_rules":{"type":"array","items":{"type":"string"}}
  }
}
```


[`⇧ Back to Top`](#table-of-contents)

---

## 📁 `sample/` JSONs

These samples directly correspond to the schemas shown above.

---

#### 📄 **envelope.json**

```json
{
  "envelope_id": "task-2025-09-06-001",
  "created_at": "2025-09-06T22:41:00Z",
  "owner": "Jason",
  "context": {
    "domain": "aero",
    "goal": "Reduce drag by ≥3% without mass >+0.5% and cooling margin <1.1",
    "constraints": [
      "mass_delta_pct <= 0.5",
      "cooling_margin >= 1.1"
    ],
    "success_metrics": ["drag_pct","mass_pct","cooling_margin"]
  },
  "baseline": {
    "design_id": "car-aero-v7.3",
    "hash": "sha256-BASELINE",
    "artifacts": {
      "cad_uri": "s3://designs/car-aero-v7.3/step/",
      "mesh_uri": "s3://designs/car-aero-v7.3/meshes/",
      "bom_uri": "s3://designs/car-aero-v7.3/bom.csv"
    }
  },
  "policies": {
    "gate_policy_uri": "./gate-policy.json",
    "llm_model_policy": "json-only",
    "quant_required": true,
    "dual_signoff_required": true
  },
  "partners": {
    "partner_l": { "name": "LLM", "schema_version": "1.0" },
    "partner_q": { "adapters": ["cfd-rans"], "schema_version": "1.0" }
  },
  "proposals": [],
  "results": [],
  "decisions": [],
  "provenance": {
    "prompt_bundle_hash": "sha256-PROMPTS",
    "solver_manifest_hash": "sha256-SOLVERS",
    "orchestrator_version": "helix-hub 1.0.0"
  }
}
```


[`⇧ Back to Top`](#table-of-contents)

---

#### 📄 **gate-policy.json**

```json
{
  "policy_id": "gate-policy-1.0",
  "must_pass": [
    "metrics.drag_pct <= -1.0",
    "metrics.mass_pct <= 0.5",
    "metrics.cooling_margin >= 1.1"
  ],
  "blocked_if": ["violations.length > 0"],
  "confidence_rules": ["uncertainty.drag_pct_ci95 <= 0.4"]
}
```


[`⇧ Back to Top`](#table-of-contents)

---

#### 📄 **proposals/prop-001.json**

res

```json
{
  "proposal_id": "prop-2025-09-06-001",
  "envelope_ref": "task-2025-09-06-001",
  "baseline_ref": "car-aero-v7.3",
  "deltas": [
    {
      "name": "rear-fairing-extension",
      "component": "rear_fairing",
      "param_changes": { "length_mm": { "delta": 12, "bounds": [0, 20] } },
      "expected_effects": { "drag_pct": -1.2, "mass_pct": 0.1 },
      "risks": ["cooling recirculation increase"],
      "assumptions": ["manufacturing tolerance ±0.5mm"]
    }
  ],
  "doe_plan": { "strategy": "latin_hypercube", "samples": 24 },
  "rationale": "Targeting wake reduction with minimal mass impact."
}
```


[`⇧ Back to Top`](#table-of-contents)

---

#### 📄 **results/prop-001.results.json**

```json
{
  "proposal_id": "prop-2025-09-06-001",
  "runs": [
    {
      "delta_name": "rear-fairing-extension",
      "metrics": { "drag_pct": -1.35, "mass_pct": 0.08, "cooling_margin": 1.11 },
      "uncertainty": { "drag_pct_ci95": 0.25, "mass_pct_ci95": 0.03 },
      "violations": [],
      "env": {
        "solver": "cfd-rans v5.4",
        "mesh_hash": "sha256-MESH",
        "container_digest": "ghcr.io/org/cfd@sha256:deadbeef",
        "runtime_minutes": 47
      }
    }
  ],
  "summary": {
    "pareto_front": ["rear-fairing-extension"],
    "recommendation": ["rear-fairing-extension"]
  },
  "bundle_hash": "sha256-RESULTS-BUNDLE"
}
```


[`⇧ Back to Top`](#table-of-contents)

---

#### 📄 **decisions/dec-001.json**

```json
{
  "decision_id": "dec-2025-09-06-a",
  "envelope_ref": "task-2025-09-06-001",
  "accepted_deltas": ["rear-fairing-extension"],
  "rejected_deltas": [],
  "justification": "Drag −1.35% within constraints; risk acceptable.",
  "signoff": {
    "quant_ok": true,
    "human": "therealjasonsilvestri@gmail.com",
    "timestamp": "2025-09-06T22:15:03Z"
  },
  "promoted_baseline": "car-aero-v7.4"
}
```

[`⇧ Back to Top`](#table-of-contents)

---

## 📁 `helix-hub/` (reference orchestrator)

These files implement a tiny Node 20 reference orchestrator that validates contracts, evaluates gates, and emits a manifest.

#### 📄 **package.json**

```json
{
  "name": "helix-hub",
  "version": "1.0.0",
  "type": "module",
  "private": true,
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "start": "node dist/index.js",
    "validate": "node dist/index.js validate --root ../sample",
    "gate": "node dist/index.js gate --root ../sample",
    "manifest": "node dist/index.js manifest --root ../sample"
  },
  "dependencies": {
    "ajv": "8.17.1",
    "ajv-formats": "3.0.1",
    "yargs": "17.7.2"
  },
  "devDependencies": {
    "@types/node": "20.11.30",
    "typescript": "5.4.5"
  }
}
```


[`⇧ Back to Top`](#table-of-contents)

---

#### 📄 **tsconfig.json**

```json
{
  "compilerOptions": {
    "target": "ES2022",
    "module": "NodeNext",
    "moduleResolution": "NodeNext",
    "outDir": "dist",
    "rootDir": "src",
    "strict": true,
    "esModuleInterop": true,
    "resolveJsonModule": true
  },
  "include": ["src"]
}
```

[`⇧ Back to Top`](#table-of-contents)

---

#### 📄 **src/index.ts**

```ts
import { hideBin } from 'yargs/helpers';
import yargs from 'yargs';
import { readFile, writeFile } from 'node:fs/promises';
import { join, resolve } from 'node:path';
import { createHash } from 'node:crypto';
import { validateAll, GateCheck, loadSchemas } from './lib/schema.js';
import { listKnownFiles } from './lib/util.js';

type Manifest = {
  envelope_hash?: string;
  proposal_hashes?: Record<string,string>;
  results_hashes?: Record<string,string>;
  decision_hashes?: Record<string,string>;
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
    const res = JSON.parse(await readFile(r,'utf-8'));
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
  .command('validate', 'Validate JSON contracts', y=>y.option('root',{type:'string', demandOption:true}),
    argv=>cmdValidate(resolve(String(argv.root))))
  .command('gate', 'Evaluate gate-policy against results', y=>y.option('root',{type:'string', demandOption:true}),
    argv=>cmdGate(resolve(String(argv.root))))
  .command('manifest', 'Write manifest.json with SHA-256 hashes', y=>y.option('root',{type:'string', demandOption:true}),
    argv=>cmdManifest(resolve(String(argv.root))))
  .demandCommand().strict().help().parse();
```

[`⇧ Back to Top`](#table-of-contents)

---

#### 📄 **src/lib/util.ts**

```ts
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

  for (const [dir, bucket] of [[proposalsDir, proposals],[resultsDir, results],[decisionsDir, decisions]] as const) {
    try {
      for (const f of await readdir(dir)) if (f.endsWith('.json')) bucket.push(join(dir, f));
    } catch {}
  }
  return { envelope, gatePolicy, proposals, results, decisions };
}
```


[`⇧ Back to Top`](#table-of-contents)

---

#### 📄 **src/lib/schema.ts**

```ts
import Ajv from 'ajv';
import addFormats from 'ajv-formats';
import { readFile } from 'node:fs/promises';
import { join, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = dirname(fileURLToPath(import.meta.url));
const SCHEMA_DIR = join(__dirname, '../../../schemas');

export type Schemas = { envelope:any, proposal:any, results:any, decision:any, gate:any };

export async function loadSchemas(): Promise<Schemas> {
  const [envelope, proposal, results, decision, gate] = await Promise.all([
    readFile(join(SCHEMA_DIR,'envelope.schema.json'),'utf-8'),
    readFile(join(SCHEMA_DIR,'proposal.schema.json'),'utf-8'),
    readFile(join(SCHEMA_DIR,'results.schema.json'),'utf-8'),
    readFile(join(SCHEMA_DIR,'decision.schema.json'),'utf-8'),
    readFile(join(SCHEMA_DIR,'gate-policy.schema.json'),'utf-8')
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
  const errors: { kind:string; path:string; message:string }[] = [];

  async function check(kind: string, path: string, validate: any) {
    const data = JSON.parse(await readFile(path, 'utf-8'));
    const ok = validate(data);
    if (!ok) for (const err of validate.errors ?? []) {
      errors.push({ kind, path, message: `${err.instancePath} ${err.message}`.trim() });
    }
  }

  try { await check('envelope', envelope, validators.envelope); } catch(e:any){ errors.push({kind:'envelope', path: envelope, message: e.message}); }
  if (gatePolicy) try { await check('gate-policy', gatePolicy, validators.gate); } catch(e:any){ errors.push({kind:'gate-policy', path: gatePolicy, message: e.message}); }
  for (const p of proposals) try { await check('proposal', p, validators.proposal); } catch(e:any){ errors.push({kind:'proposal', path: p, message: e.message}); }
  for (const r of results) try { await check('results', r, validators.results); } catch(e:any){ errors.push({kind:'results', path: r, message: e.message}); }
  for (const d of decisions) try { await check('decision', d, validators.decision); } catch(e:any){ errors.push({kind:'decision', path: d, message: e.message}); }
  return { errors };
}

export class GateCheck {
  private evalExpr(obj: any, expr: string): boolean {
    const m = expr.match(/^([\w\.]+)\s*(<=|>=|<|>|==)\s*([-+]?\d+(\.\d+)?|\w+)$/);
    if (!m) return false;
    const [, path, op, raw] = m;
    const val = path.split('.').reduce((o,k)=> o?.[k], obj);
    const rhs = isNaN(Number(raw)) ? raw : Number(raw);
    switch(op){
      case '<=': return val <= rhs;
      case '>=': return val >= rhs;
      case '<' : return val < rhs;
      case '>' : return val > rhs;
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
      const blocked = (policy.blocked_if ?? []).some((r:string)=> {
        if (r === 'violations.length > 0') return vlen > 0;
        return this.evalExpr(run, r);
      });
      if (blocked) return false;
    }
    return true;
  }
}
```


[`⇧ Back to Top`](#table-of-contents)

---

## Reference Orchestrator (“helix-hub”)

A tiny Node 20 reference that validates contracts, evaluates gates, and emits a manifest. See `helix-hub/` for full source and `npm` scripts.

---

## Windows 10 (early prototype) constraints
- Tested on **Node.js v20.14.0** on **Windows 10**. Helix\{\} is platform-agnostic; these constraints will relax as v1 hardens.  
- Enforce CRLF if needed.  
- End-to-end: `npm run build && npm run validate && npm run gate && npm run manifest`.


[`⇧ Back to Top`](#table-of-contents)  

---


## Heritage Appendix: PaLMs\{\} Mapping

Helix\{\} stands on PaLMs\{\} (_Jason Silvestri's prior orchestration discipline for handling PLM AI Lifecycle Models_).

The **PaLMs\{\}** system is designed to be highly autonomous. A `Helix{}` leverages its own variant of the `PaLMs{}` design pattern. 

In short, once a lifecycle is defined and validated, it can manage its own state transitions based on predefined rules and conditions. This allows for dynamic adaptation to changing requirements and scenarios.

> PaLM{} ↔◼↔ Model (◼=PaLMModel) [≥1 Model/PaLM via policy] > - Model ↔◼↔ WorkflowState (◼=ModelWorkflowState, INT) [≥1 State/Model] > - Model ↔◼↔ Lifecycle (◼=ModelLifecycle) > - Lifecycle →◼+← LifecyclePhase (◼=LifecycleLifecyclePhase, UQ PhaseID; PhaseOrder) > - LifecyclePhase ↔◼1↔ Workflow (◼=LifecyclePhaseWorkflow, UQ both) > - Workflow →◼+← WorkflowStep (◼=WorkflowWorkflowStep, UQ StepID; StepOrder) > - LifecyclePhase ↔◼↔ PhaseGate (◼=LifecyclePhaseGate) > - WorkflowStep ↔◼↔ PhaseGate (◼=WorkflowStepGate [Placement]) > - PhaseGate →◼+← GateTransition (◼=PhaseGateTransition; Mode=Absolute|Relative)


For lineage:
- **States/Phases/Gates** map to Helix\{\} gate policies and decision records.  
- Replace PaLMs\{\}-specific pipelines with thin adapters that read/write Helix\{\} contracts.  
- Keep PaLMs\{\} mentions for history; **all live examples use Helix\{\}**.


[`⇧ Back to Top`](#table-of-contents)  

---


Notes:

* **Everything user-facing** (docs, schemas, samples) lives under `wwwroot` so it’s automatically served by ASP.NET Core and visible in GH Pages–style static hosting if you ever want it.
* The **Node utility** (`tools/helix-hub`) is intentionally outside the web root to keep your .NET app pure static hosting while still letting you run schema/gate/lint in CI.


[`⇧ Back to Top`](#table-of-contents)  

---


## 📌 Where the Concepts Live (So We Never Drift)

* **Cold-Start Protocol (Seed Header)**
  Lives in docs as a canonical snippet and is not persisted server-side by default. Put it in:

  * `Helix/wwwroot/docs/README.md` (canonical)
  * `Helix/wwwroot/docs/Discovery/README.md` (historical)
    Optional convenience copy: `Helix/wwwroot/samples/seed-header.json` for quick copy/paste.

* **Primary Task Envelope**
  The envelope *is* the unit of work. Each live envelope belongs in a repo/workspace *or* a storage namespace per project. For the reference repo, keep a gold sample at:

  * `Helix/wwwroot/samples/envelope.json`
    In production, you’ll have per-task folders, e.g. `/data/envelopes/{envelope_id}/…` (outside web root).

* **Identities & AuthZ**
  These are **envelope-level fields** (they travel with the task), not Cold-Start fields. They belong in the envelope alongside `partners` and `policies`.


[`⇧ Back to Top`](#table-of-contents)  

---


## 🧩 Minimal Web Project (full files)

### Helix/Helix.csproj

```xml
<Project Sdk="Microsoft.NET.Sdk.Web">
  <PropertyGroup>
    <TargetFramework>net9.0</TargetFramework>
    <Nullable>enable</Nullable>
    <ImplicitUsings>enable</ImplicitUsings>
    <InvariantGlobalization>true</InvariantGlobalization>
    <AssemblyName>Helix</AssemblyName>
    <RootNamespace>Helix</RootNamespace>
  </PropertyGroup>

  <ItemGroup>
    <!-- Static web assets live under wwwroot by default -->
    <Content Include="wwwroot\**\*.*" CopyToPublishDirectory="PreserveNewest" />
  </ItemGroup>
</Project>
```

[`⇧ Back to Top`](#table-of-contents)  

---

### Helix/Program.cs

```csharp
using Microsoft.AspNetCore.Http.Headers;

var builder = WebApplication.CreateBuilder(args);

// No server-side controllers for v1: serve static assets from wwwroot
var app = builder.Build();

app.Use(async (ctx, next) =>
{
    // Strong caching for schemas/samples/docs (tune to taste)
    var path = ctx.Request.Path.Value ?? "";
    if (path.Contains("/schemas/") || path.Contains("/samples/") || path.Contains("/docs/"))
    {
        ctx.Response.GetTypedHeaders().CacheControl = new CacheControlHeaderValue
        {
            Public = true,
            MaxAge = TimeSpan.FromMinutes(5)
        };
    }
    await next();
});

app.UseDefaultFiles(); // serve index.html by default
app.UseStaticFiles();

app.MapGet("/healthz", () => Results.Ok(new { ok = true, at = DateTimeOffset.UtcNow }));

app.Run();
```

[`⇧ Back to Top`](#table-of-contents)  

---

### Helix/appsettings.json

```json
{
  "Logging": {
    "LogLevel": {
      "Default": "Warning",
      "Microsoft.AspNetCore": "Warning"
    }
  },
  "AllowedHosts": "*"
}
```

[`⇧ Back to Top`](#table-of-contents)  

---

### Helix/wwwroot/index.html

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>Helix{} v1</title>
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <link href="/assets/css/site.css" rel="stylesheet" />
</head>
<body>
  <main class="wrap">
    <h1>Helix{}™ v1</h1>
    <p>Universal LLM+Quant backbone for rapid AI development and cold-starts — ChatGPT-first.</p>
    <nav>
      <ul>
        <li><a href="/docs/README.md">Root README (web view)</a></li>
        <li><a href="/docs/Discovery/README.md">Discovery Notes</a></li>
        <li><a href="/schemas/envelope.schema.json">Schemas</a></li>
        <li><a href="/samples/envelope.json">Sample Envelope</a></li>
        <li><a href="/samples/gate-policy.json">Sample Gate Policy</a></li>
      </ul>
    </nav>
    <section>
      <h2>Cold-Start (Seed Header)</h2>
      <p>Copy from <a href="/docs/README.md#cold-start-protocol">Root README</a> or the Discovery doc. Optionally store a convenience copy at <code>/samples/seed-header.json</code>.</p>
    </section>
  </main>
</body>
</html>
```

[`⇧ Back to Top`](#table-of-contents)  

---

### Helix/wwwroot/docs/README.md

> Use the **Root README** content we finalized (the “clean spec”), including the **Identities** and **AuthZ** sections and the **Glossary Guardrails** reference.

[`⇧ Back to Top`](#table-of-contents)

---

### Helix/wwwroot/docs/Discovery/README.md

> Use the **Discovery README** we finalized (history + “early guardrails”), now including Identities/AuthZ and the glossary note.

[`⇧ Back to Top`](#table-of-contents)

---

### Helix/wwwroot/docs/glossary.json

```json
{
  "canonical": {
    "task_envelope": ["task envelope"],
    "partner_l": ["partner-l", "language partner", "llm partner"],
    "partner_q": ["partner-q", "quant partner", "verification engine"],
    "gate_policy": ["gate policy", "promotion policy"],
    "decision": ["decision", "promotion record", "sign-off record"],
    "document_management": ["document management", "dm"]
  },
  "disallow": {
    "doc shepherding": "document_management",
    "idea arbiter": "partner_l",
    "numeric oracle": "partner_q"
  }
}
```

> (Identical to what we drafted—placing it in `wwwroot/docs/` makes it easy to fetch in CI or view in a browser.)


[`⇧ Back to Top`](#table-of-contents)  

---

## 🧪 Node Utilities (unchanged, just relocated)

Place the `helix-hub` Node project under `tools/helix-hub/` exactly as we authored. It provides:

* JSON Schema validation
* Gate policy evaluation
* `lint-docs.ts` glossary checker

Keeping it in `tools/` avoids mixing build chains and keeps the .NET web app lean.


[`⇧ Back to Top`](#table-of-contents)  

---

## 🧭 What Belongs in the Envelope vs. Cold-Start?

> [!IMPORTANT] 
>
> This is a **key discipline** to avoid drift and confusion.


**Cold-Start (Seed Header)**

* Purpose: *Align a chat session immediately.*
* Content: `version`, `project`, capability flags, deterministic settings (UUID namespace, hash), preferred outputs (contract filenames).
* Lifetime: short; paste at chat start. Do **not** store in production task records.

**Task Envelope (Primary)**

* Purpose: *Single source of truth per task.*
* Content: `context` (goal/constraints/success metrics), `baseline` (artifact hashes/URIs), `policies` (gate policy path, dual-signoff flags), `partners` (L/Q declarations), **`identities`** (humans/services), **`authz`** (who can propose/score/sign/override), provenance hashes.
* Lifetime: persistent artifact of the task. Versioned and archived. Travels with proposals/results/decisions.

That split keeps **session bootstrap** separate from **governed work**—exactly what we want for clarity and replay.


[`⇧ Back to Top`](#table-of-contents)  

---

## License / Attribution

**`Helix{}` v1 is ChatGPT-Native**. If open-sourced, retain attribution:  
**“Helix\{\} invented by Jason Silvestri & Mark Silvestri, with system design assistance by Lumina (ChatGPT).”**

---

[`Home`](./README.md) » [`Helix{}™ Discovery`](./docs/Discovery/README.md) · · [`⇧ Back to Top`](#table-of-contents)

---

[1]: https://github.com/JasonSilvestri/Helix "HELIX REPOSITORY ..."
[2]: https://www.sciencedirect.com/science/article/abs/pii/B9780080926025500184?utm_source=chatgpt.com "DUAL DESIGN PARTNERS IN AN INCREMENTAL ..."

###### Copyright © 2025 [Helix\{\}][1] — All Rights Reserved by Jason Silvestri & Mark Silvestri