module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  extends: [
    // 'airbnb-base',
    // 'plugin:@typescript-eslint/recommended',
    // 'plugin:@typescript-eslint/recommended-requiring-type-checking',
    // 'plugin:prettier/recommended',
    // 'plugin:import/typescript',
    'eslint:recommended'
  ],
  env: {
    'jest': true,
    'browser': true,
    'commonjs': true,
    'es2021': true
  },
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    project: 'tsconfig.json'
  },
  settings: {
    'import/parsers': {
      '@typescript-eslint/parser': ['.ts'],
    },
    'import/resolver': {
      node: {
        extensions: ['.ts'],
        paths: ['node_modules/', 'node_modules/@types']
      },
      typescript: {},
    },
  },
  rules: {
    semi: ['error', 'always'],
    quotes: [2, 'single'],
    indent: ['error', 2]
  }
};
