# First send with the Nitrosend TypeScript SDK

- **Install and versions.** `npm install @nitrosend/sdk typescript @types/node` installed SDK 0.11.7, TypeScript 7.0.2, @types/node 26.6.5. Runtime: Node v22.23.1 on macOS 26.6.2 arm64.
- **Build.** `npx tsc --strict` with `"module": "NodeNext"`, `"moduleResolution": "NodeNext"`, `"target": "ES2022"`, `"types": ["node"]` and `"type": "module"` compiled the published script with no errors. It also compiles standalone with `npx tsc --strict sdk-send.ts`, because the file carries `/// <reference types="node" />`.
- **Run.** `NITROSEND_API_KEY=... node dist/send.js` printed `{"id":5161650,"status":"queued","to":"proof@dogfood.nitrosend.net"}`.
- **Time.** About four minutes from install to first send; about ten including the README and tsconfig.
- **Slowed down most.** The strict ESM build. The README example uses top-level `await`, and the default `tsc` module setting rejects that with `error TS1378: Top-level 'await' expressions are only allowed when the 'module' option is set to 'es2022', 'esnext', 'system', 'node16', 'node18', 'node20', 'nodenext', or 'preserve'`. The README's strict-TypeScript note mentions only `"types": ["node"]`.
- **Doc gap repro.** `npx tsc --strict` on the README example with the default module setting prints TS1378; `"module": "NodeNext"` plus `"type": "module"` fixes it.
- **One change.** Add a copy-paste tsconfig block with `"module": "NodeNext"` and `"type": "module"` (or a `.mts` note) beside that sentence in the README.
