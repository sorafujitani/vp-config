import type { FormatOptions } from "oxfmt";

const config = {
  arrowParens: "always",
  bracketSpacing: true,
  endOfLine: "lf",
  printWidth: 80,
  semi: true,
  singleQuote: false,
  sortImports: {},
  sortPackageJson: true,
  tabWidth: 2,
  trailingComma: "all",
  useTabs: false,
} satisfies FormatOptions;

export default config;
