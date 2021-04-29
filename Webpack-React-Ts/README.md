# Webpack-Ts-React

Webpack project template with Typescript React with CSS Modules and Jest.

Use node 14

## Reference

### (1) Style

It supports both global CSS & CSS modules. Global CSS is imported in `Index.tsx`. Webpack packs CSS into JS file and it doesn't create cass file.

`yarn cssExtractBuild` will create a separate CSS file.

### (2) Font

Font will be imported by file-loader into dist folder when it is specified in `font-face`. In this case, we have `font-face` in `global.css` as below. Webpack will grab font file into the `font` folder in `dist` and transform the url to `fonts/Lato-Regular.ttf`.

### (3) index.html

`html-webpack-plugin` will add script tag with react bundle name and move to `dist` from `public`.

```scss
@font-face {
  font-family: 'Lato';
  src: url('../../public/fonts/Lato/Lato-Regular.ttf') format('truetype');
}
```

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

For creating a separate CSS file, we use mini-css-extract-plugin

```bash
# This doesn't need to be installed if we are just bundling css into js
yarn add mini-css-extract-plugin css-minimizer-webpack-plugin --dev
```
