// import { FlatCompat } from "@eslint/eslintrc";
import pluginNext from "@next/eslint-plugin-next";
// const compat = new FlatCompat({
//   // import.meta.dirname is available after Node.js v20.11.0
//   baseDirectory: import.meta.dirname,
// });

const eslintConfig = [
  {
    plugins: {
      "@next/next": pluginNext,
    },
  },
  {
    files: ["**/*.js", "**/*.cjs"],
    rules: {
      semi: "error",
      "no-unused-vars": "error",
    },
    languageOptions: {
      parserOptions: {
        sourceType: "module",
        ecmaVersion: 2020,
      },
    },
  },
];

export default eslintConfig;
