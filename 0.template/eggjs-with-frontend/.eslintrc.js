module.exports = {
  env: {
    browser: true,
    es6: true,
    node: true
  },
  globals: {
    Atomics: "readonly",
    SharedArrayBuffer: "readonly",
  },
  // 指定传给 parser 的信息，eslint使用的默认是Espree
  parserOptions: {
    ecmaVersion: 2018,
    sourceType: "module",
  },
  
  extends: [
    "eslint:recommended",
    "eslint-config-egg",
    "plugin:react/recommended"
  ],
  rules: {
    indent: ["error", 2],
    "comma-dangle": 0
  },
};
