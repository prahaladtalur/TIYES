import js from "@eslint/js";

export default [
  js.configs.recommended,
  {
    files: ["script.js"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "script",
      globals: {
        window: "readonly",
        document: "readonly",
        IntersectionObserver: "readonly",
        requestAnimationFrame: "readonly",
      },
    },
  },
  {
    files: ["scripts/**/*.mjs"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      globals: {
        process: "readonly",
      },
    },
  },
  {
    ignores: ["node_modules/", "dist/"],
  },
];
