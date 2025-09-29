/* eslint-env node */
module.exports = {
  root: true,
  env: { browser: true, es2020: true },
  extends: [
    "eslint:recommended",
    "plugin:@typescript-eslint/recommended-type-checked",
    "plugin:@typescript-eslint/stylistic-type-checked",
    "plugin:react-hooks/recommended",
    // Thêm 2 dòng dưới nếu bạn muốn rule cho React như README gợi ý:
    "plugin:react/recommended",
    "plugin:react/jsx-runtime"
  ],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: "latest",
    sourceType: "module",
    project: ["./tsconfig.json", "./tsconfig.node.json"],
    tsconfigRootDir: __dirname,
  },
  plugins: ["react-refresh"],
  ignorePatterns: ["dist", ".eslintrc.cjs"], // giữ nguyên nếu bạn muốn bỏ qua chính file cấu hình
  rules: {
    "react-refresh/only-export-components": ["warn", { allowConstantExport: true }],
    // có thể thêm rule tùy team ở đây
  },
  settings: {
    // giúp eslint-plugin-react tự detect version
    react: { version: "detect" }
  }
};