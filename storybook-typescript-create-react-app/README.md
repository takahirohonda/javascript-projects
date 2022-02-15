# Storybook Typescript with create-react-app

This project is based on `../storybook-typescript-create-react-app`. It was created by `create-react-app`.

```bash
# Create typescript react project
yarn create react-app storybook-typescript-create-react-app --template typescript
# Then, install storybook
cd storybook-typescript-create-react-app
npx sb init
```

# Appendix

Setting up semantic release

1. Install

```bash
yarn add commitlint commitizen semantic-release @semantic-release/changelog @semantic-release/git -D
```

2. Add files

```
.czrc
.releaserc.js
```

3. Add commit script to `package.json`

```json
"scripts": {
    "commit": "cz",
}
```
