# Testing frontend component library

This project is to test frontend component library manually.

**Steps**

1. Build module

```bash
cd storybook-typescript-create-react-app
yarn build
```

2. Move dist folder from `storybook-typescript-create-react-app` to `afec` folder. Do not delete `package.json` file.

3. Install dependencies and copy & paste `afec` folder into `node_module`.

4. Go into `node_module/afec` and install module

```bash
cd node_module/afec
yarn install
```

5. Then start react app

```bash
yarn start
```

# Appendix

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

```bash
yarn create react-app test-fec-library-create-react-app --template typescript
```
