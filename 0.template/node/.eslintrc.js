module.exports = {
  ignorePatterns: ['node_modules/', '*.js'],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
    jsx: true,
  },
  parser: '@typescript-eslint/parser',
  extends: [
    "eslint:recommended",
    'plugin:@typescript-eslint/recommended',
  ],
  rules: {
    indent: ["error", 2],
  },
};
