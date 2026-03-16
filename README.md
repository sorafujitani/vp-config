# @sorafujitani/vp-config

Reusable [vite-plus](https://github.com/nicepkg/vite-plus) configuration providing shared **format**, **lint**, and **test** presets.


## Install

```bash
pnpm add -D @sorafujitani/vp-config
```

## Usage

### Basic — use all presets

```ts
// vite.config.ts
import { defineConfig } from "vite-plus";
import { fmt, lint, test } from "@sorafujitani/vp-config";

export default defineConfig({
  fmt,
  lint,
  test,
});
```

### With staged (pre-commit auto-fix)

```ts
// vite.config.ts
import { defineConfig } from "vite-plus";
import { fmt, lint, test } from "@sorafujitani/vp-config";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt,
  lint,
  test,
});
```

### Cherry-pick individual presets

You can import only the presets you need:

```ts
import { defineConfig } from "vite-plus";
import { fmt } from "@sorafujitani/vp-config";

export default defineConfig({
  fmt,
  // bring your own lint / test config
});
```

### Override or extend a preset

Spread the preset and override specific fields:

```ts
import { defineConfig } from "vite-plus";
import { fmt, lint, test } from "@sorafujitani/vp-config";

export default defineConfig({
  fmt: {
    ...fmt,
    printWidth: 120,
    singleQuote: true,
  },
  lint: {
    ...lint,
    rules: {
      ...lint.rules,
      "no-magic-numbers": "off",
    },
  },
  test: {
    ...test,
    include: [...test.include, "tests/**/*.test.ts"],
  },
});
```

### With `vp pack` (library build)

If you are also building a library with `vp pack`, combine with a tsdown config:

```ts
// vite.config.ts
import { defineConfig } from "vite-plus";
import { fmt, lint, test } from "@sorafujitani/vp-config";
import tsdownConfig from "./tsdown.config.ts";

export default defineConfig({
  fmt,
  lint,
  test,
  pack: tsdownConfig,
});
```

## Preset Details

### `fmt` — Format

Opinionated Prettier-compatible defaults:

- Double quotes, semicolons, trailing commas (`"all"`)
- 2-space indent, 80 char print width, LF line endings
- Auto-sorted imports and `package.json`

### `lint` — Lint

OxLint configuration with TypeScript-first rules:

- **Plugins**: `typescript`, `unicorn`, `oxc`, `import`, `promise`
- **Type-aware** checking enabled (`typeAware: true`, `typeCheck: true`)
- **Categories**: `correctness` → error, `pedantic` / `perf` / `style` / `suspicious` → warn
- Strict TypeScript rules (`no-explicit-any` as error, consistent type imports/exports)
- Import hygiene (`no-cycle`, `no-duplicates`, `no-self-import`)
- CJS overrides for `.cjs` files

### `test` — Test

Vitest include pattern:

- `src/**/*.test.ts`
- `index.test.ts`

## Development

```bash
pnpm run build       # Build with vp pack
pnpm run dev         # Build in watch mode
pnpm run test        # Run tests
pnpm run typecheck   # Type check with tsgo
pnpm run release     # Release with bumpp
```

## License

[MIT](./LICENSE)
