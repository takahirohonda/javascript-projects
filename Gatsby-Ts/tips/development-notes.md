### (1) Pages

Pages are under `src/pages`.

`index.js` is corresponds to `/`. `404.js` corresponds to 404 error page. To handle 500 errors, we need custom configs. Rest of the pages corresponds to the url path (e.g. `About.js` is `\about`).

### (2) Styles

There are both global & CSS modules available. In fact, Gatsby supports CSS modules by default. To use SASS, we need to install some dependencies.

```bash
yarn add node-sass gatsby-plugin-sass --dev
```

<strong>1. CSS Modules</strong>

Gatsby uses CSS Modules by default.

For the pages, we need to create a corresponding modules like `index.module.css`, `about.module.css` and `404.module.css`. The rest will be taken care by Gatsby.

From Gatsby 3, import statement has to be `import * as styles from ...`.

<strong>2. Global Style</style>

Create a folder called `style` in `src`. Then, create a file called `gatsby-browser.js` in the root folder and add import statement.

### (3) GraphQL

<strong>1. GraphQL type generation</strong>

From v4, type generation comes out of the box. Just need to add `graphqlTypegen: true` in `gatsby-config.ts` (or add the output path as in this repo).

```js
graphqlTypegen: {
  typesOutputPath: 'src/types/gatsby-types.d.ts',
},
```

Then, we can access the type with `Queries.whatever` as below.

```tsx
const data = useStaticQuery<Queries.GetSiteMetadataTitleQuery>(graphql`
  query GetSiteMetadataTitle {
    site {
      siteMetadata {
        title
      }
    }
  }
`);
```

### (4) Use MDX

`gatsby-source-filesystem`: To load files into Gatsby data layer.
`gatsby-plugin-page-creator`: Turn any folder into the folder that can turn into pages (it will turn the folder specified in `gatsby-source-filesystem` into actual pages. see `gatsby-config.ts`). Then use `gatsby-plugin-mdx` to transform the file into mdx node.

```bash
yarn add gatsby-source-filesystem gatsby-plugin-page-creator gatsby-plugin-mdx @mdx-js/mdx @mdx-js/react -D
```

see: https://www.gatsbyjs.com/plugins/gatsby-plugin-mdx/

- Setting layout

1. We can simply import it into MDX

```tsx
import { Layout } from "../components/Layout";

export default ({ children }) => <Layout>{children}</Layout>;

# Hello

this is my first blog
```

2. Set default layout in `gatsby-plugin-mdx` option

See `gatsby-config.ts`

## (5) Use Image

`gatsby-plugin-sharp` creates different size images optimised for website, which can be queried by GraphQL.

```bash
yarn add gatsby-plugin-image gatsby-plugin-sharp gatsby-transformer-sharp gatsby-remark-images -D
```

Once configured in `gatsby-config.ts`, we can access the image with GraphQL. We can filer by the directory, too.

`gatsby-remark-images` is used for getting the image with relative path in mdx files. Add in `gatsbyRemarkPlugins` in the `gatsby-plugin-mdx` option.

```graphql
query MyQuery {
  allFile(filter: { relativeDirectory: { eq: "test" } }) {
    nodes {
      publicURL
      prettySize
      relativeDirectory
      childImageSharp {
        gatsbyImageData
      }
    }
  }
}
```

See more: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-plugin-image/#restrictions-on-using-staticimage

## (6) SEO

Adding head to html everywhere.

```bash
yarn add react-helmet
yarn add @types/react-helmet gatsby-plugin-react-helmet -D
```

Add `gatsby-plugin-react-helmet` to `gatsby-config.ts`

## (7) Use react-jsx

We don't need to import React any more. Add this into `gatsby-node.ts`

```ts
exports.onCreateBabelConfig = ({ actions }: any) => {
  actions.setBabelPlugin({
    name: "@babel/plugin-transform-react-jsx",
    options: {
      runtime: "automatic",
    },
  });
};
```
