module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: ["eslint-config-mdh-typescript-react"],
  parserOptions: {
    project: "./tsconfig.json",
  },
  overrides: [{ files: ["**/*.ts"] }],
  rules: {},
};
