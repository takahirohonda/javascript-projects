# Webpack-Ts-React

Webpack project template with Typescript React with CSS Modules and Jest.

Use node 16

## Reference

### Installation

```bash
# React
yarn add react react-dom

yarn add typescript @types/react @types/react-dom eslint jest ts-jest enzyme @types/jest @types/enzyme --dev

# enzyme-adapter-react-17 is not availble yet...
# when it is updated 
yarn add enzyme-adapter-react-16 @types/enzyme-adapter-react-16 --dev
# for now, use unofficial one
yarn add @wojtekmaj/enzyme-adapter-react-17 --dev

# eslint & stylelint
yarn add eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser stylelint stylelint-order stylelint-scss --dev

# Webpack & plugins
yarn add webpack webpack-cli webpack-dev-server css-loader css-modules-typescript-loader file-loader html-webpack-plugin postcss-loader sass sass-loader source-map-loader style-loader svg-inline-loader terser-webpack-plugin copy-webpack-plugin ts-loader url-loader --dev
```
