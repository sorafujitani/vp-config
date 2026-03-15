# CLAUDE.md

## Overview
`@sorafujitani/vp-config` — Reusable npm package providing shared vite-plus configuration (fmt / lint / test).
Based on kazupon/vp-config structure, extracted from the memoli repository.

## Tech Stack
- **Runtime**: Node.js (ESM)
- **Build**: vite-plus (`vp pack`) + tsdown
- **Type checking**: tsgo (`@typescript/native-preview`)
- **Testing**: vitest (`@voidzero-dev/vite-plus-test`)
- **Package manager**: pnpm

## Commands
- `pnpm run build` — Build (generates `dist/index.mjs`, `dist/index.d.mts`)
- `pnpm run dev` — Build in watch mode
- `pnpm run test` — Run tests
- `pnpm run typecheck` — Type check with tsgo
- `pnpm run release` — Release with bumpp

## Structure
```
src/
  index.ts      # re-export (fmt, lint, test)
  format.ts     # Prettier-style format config
  lint.ts       # OxLint-style lint config
  test.ts       # Vitest test config
```

## Notes
- `vite.config.ts` imports from its own `src/` for dogfooding
- pnpm overrides map `vite` → `@voidzero-dev/vite-plus-core` and `vitest` → `@voidzero-dev/vite-plus-test`
- `tsdown.config.ts` uses `dts: { tsgo: true }` (experimental)
