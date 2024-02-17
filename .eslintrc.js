module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: ["eslint:recommended", "plugin:@typescript-eslint/recommended"],
  parser: "@typescript-eslint/parser",
  ignorePatterns: ["*.config.js", ".eslintrc.js"],
  rules: {
    quotes: ["error", "double"],
    semi: ["error", "always"],
  },
};
