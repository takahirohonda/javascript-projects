# Gatsby Template with TypeScript

## REFERENCE

1. TypeScript Support

TypeScript is supported by Gatsby. All we need to do is to create tsx files instead of jsx files.

`gatby-plugin-typescript` is automatically included in Gatsby. If you need to configure options, we can explicitly use this plugin (https://www.gatsbyjs.com/plugins/gatsby-plugin-typescript/).

2. Installation

- SASS -> supported by `gatsby-plugin-sass`
- MDX -> supported by `gatsby-plugin-mdx`

Instead of uing Gatsby starter kit, we just install dependencies.

```bash
# React, Typescript and Gatsby setup
yarn add react react-dom
yarn add gatsby typescript @types/react @types/react-dom jest ts-jest enzyme @types/jest @types/enzyme --dev

# Gatsby plugins
# Sass support
yarn add gatsby-plugin-sass node-sass --dev
# mdx support
yarn add gatsby-plugin-mdx @mdx-js/mdx @mdx-js/react --dev

# enzyme-adapter-react-17 is not availble yet...
# when it is updated 
yarn add enzyme-adapter-react-16 @types/enzyme-adapter-react-16 --dev
# for now, use unofficial one
yarn add @wojtekmaj/enzyme-adapter-react-17 --dev

# eslint & stylelint
yarn add eslint eslint-config-airbnb eslint-plugin-import eslint-plugin-jsx-a11y eslint-plugin-react eslint-plugin-react-hooks @typescript-eslint/eslint-plugin @typescript-eslint/parser stylelint stylelint-order stylelint-scss --dev
```

3. Setting up the project
