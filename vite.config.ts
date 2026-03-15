import { defineConfig } from "vite-plus";
import { fmt, lint, test } from "./src/index.ts";
import tsdownConfig from "./tsdown.config.ts";

export default defineConfig({
  staged: {
    "*": "vp check --fix",
  },
  fmt,
  lint,
  test,
  pack: tsdownConfig,
});
