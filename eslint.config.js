import unocss from "@unocss/eslint-config/flat";
import ts from "typescript-eslint";
import astro from "eslint-plugin-astro";
import a11y from "eslint-plugin-jsx-a11y";
import globals from "globals";

/**
 * @type {import("eslint").Linter.Config[]}
 */
export default [
  {
    ignores: ["**/node_modules/**", ".astro/**", "./api.generated.d.ts"],
  },
  unocss,
  ...ts.configs.recommended,
  ...astro.configs.recommended,
  {
    files: ["**/*.{astro,js,jsx,svelte,ts,tsx,vue}"],
    ...a11y.flatConfigs.recommended,
    languageOptions: {
      ...a11y.flatConfigs.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "off",
      "jsx-a11y/label-has-associated-control": "off",
    },
  },
];
