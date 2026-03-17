import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),

  // ── TypeScript-specific rules (*.ts, *.tsx) ─────────────────────────────
  {
    files: ["**/*.ts", "**/*.tsx"],
    rules: {
      // Upgrade unused vars from warn → error; allow underscore-prefixed names
      "@typescript-eslint/no-unused-vars": [
        "error",
        { argsIgnorePattern: "^_", varsIgnorePattern: "^_" },
      ],
      // Flag `any` as a warning — prefer `unknown` or explicit types
      "@typescript-eslint/no-explicit-any": "warn",
      // Non-null assertions bypass type safety; prefer proper narrowing
      "@typescript-eslint/no-non-null-assertion": "warn",
      // Enforce `import type` for type-only imports (tree-shake friendly)
      "@typescript-eslint/consistent-type-imports": [
        "error",
        { prefer: "type-imports", fixStyle: "inline-type-imports" },
      ],
      // Disallow explicit types where TS can infer them (e.g. `const x: number = 1`)
      "@typescript-eslint/no-inferrable-types": "error",
      // Warn on empty interfaces / empty object types `{}`
      "@typescript-eslint/no-empty-object-type": "warn",
    },
  },

  // ── React extra rules (all matched files) ───────────────────────────────
  {
    rules: {
      // Warn on <></> or <Fragment></Fragment> that wrap a single child
      "react/jsx-no-useless-fragment": ["warn", { allowExpressions: true }],
      // Self-close components and void HTML elements when they have no children
      "react/self-closing-comp": ["warn", { component: true, html: true }],
      // Disallow unnecessary `{}` around string literals in JSX
      "react/jsx-curly-brace-presence": [
        "warn",
        { props: "never", children: "never" },
      ],
      // Using array indices as keys causes subtle re-render bugs
      "react/no-array-index-key": "warn",
      // Enforce consistent [value, setValue] naming for useState
      "react/hook-use-state": "warn",
    },
  },

  // ── Import ordering ──────────────────────────────────────────────────────
  {
    rules: {
      "import/order": [
        "error",
        {
          groups: [
            "builtin",
            "external",
            "internal",
            "parent",
            "sibling",
            "index",
            "object",
            "type",
          ],
          "newlines-between": "always",
          alphabetize: { order: "asc", caseInsensitive: true },
        },
      ],
      "import/no-duplicates": "error",
    },
  },

  // ── General code quality (all files) ────────────────────────────────────
  {
    rules: {
      "no-console": "warn",
      "no-debugger": "error",
      // Require === / !== (null comparisons excluded)
      eqeqeq: ["error", "always", { null: "ignore" }],
      "prefer-const": "error",
      "no-var": "error",
      // Prefer shorthand methods/properties: `{ foo }` over `{ foo: foo }`
      "object-shorthand": "warn",
      // Prefer template literals over string concatenation
      "prefer-template": "warn",
      // Always use braces for control flow, even single-line
      curly: ["error", "all"],
    },
  },
]);

export default eslintConfig;
