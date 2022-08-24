# Generating `.scss.d.ts` files

`gatsby-plugin-scss-typescript` no longer works - I think it stopped working after v3. Use `gatsby-plugin-sass` and `gatsby-plugin-dts-css-modules` instead.

# TypeScript Support

TypeScript is supported by Gatsby. All we need to do is to create tsx files instead of jsx files.

`gatby-plugin-typescript` is automatically included in Gatsby. If you need to configure options, we can explicitly use this plugin (https://www.gatsbyjs.com/plugins/gatsby-plugin-typescript/).

# Project setup

## Setting up the project

- Add 3 files (in this project, using ts by `gatsby-plugin-ts-config`)
  - gatsby-config.js (for setting up ts-config plugin)
  - gatsby-config.ts
  - gatsby-browser.ts
  - gatsby-node.ts

**`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.com/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.

**`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.com/docs/gatsby-config/) for more detail).

**`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.com/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.

**`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.com/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.

- Set up src folder

```bash
- src
  - components
  - markdown
  - pages
  - styles # add global style imported in gatsby-browser.ts
    - global.scss
  - templates
```

Instead of using Gatsby starter kit, we are installing dependencies manually.

```bash
# React, Typescript and Gatsby setup
yarn add react react-dom
yarn add gatsby typescript @types/react @types/react-dom jest ts-jest enzyme @types/jest @types/enzyme --dev

# To make config files into TypeScript (like gatsby-browser.ts)
yarn add gatsby-plugin-ts-config --dev

# Gatsby plugins
# Sass support
yarn add gatsby-plugin-sass gatsby-plugin-dts-css-modules node-sass --dev
# mdx support
yarn add gatsby-plugin-mdx @mdx-js/mdx @mdx-js/react --dev

# enzyme-adapter-react-17 is not available yet...
# when it is updated
yarn add enzyme-adapter-react-16 @types/enzyme-adapter-react-16 --dev
# for now, use unofficial one
yarn add @wojtekmaj/enzyme-adapter-react-17 --dev

# eslint & stylelint
yarn add eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser stylelint stylelint-order stylelint-scss --dev
```
