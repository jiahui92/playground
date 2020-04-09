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
  ],
  // 插件可以用于rules、env和extends等配置中
  plugins: [
    // "vue", // eslint-plugin-vue
    // "react", // eslint-plugin-react
  ],
  rules: {
    indent: ["error", 2],
  },
};
