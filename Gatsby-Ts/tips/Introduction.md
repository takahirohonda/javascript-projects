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

<strong>2. Querying Data with GraphQL</strong>

There are two types of GraphQL queries.

- Page Queries - happens on Page components: see example in `src/pages/index.js`.

- Static Queries - happens on Non-Page components: see example in `src/components/title.js`.

1. Site Metadata

Add config siteMetadata to `gatsby-config.js`.

```
siteMetadata: {
  title: 'My First Gatsby Site'
},
```

Then go to `localhost:8000/_graphiql` and now we can query the data.

```graphql
{
  site {
    siteMetadata {
      title
    }
  }
}
```

<strong>4. Plugins</strong>

The best way to extend Gatsby's capability is to use plugins. We can use plugins to fetch content and data from, for example, CMS and transform it. Once installed, we can add it to `gatsby-config.js`.

- Example

```bash
yarn add gatsby-source-filesystem gatsby-transformer-remark --dev
```

The plugin brings new graphql that wasn't available before.

```graphql
{
  allFile {
    edges {
      node {
        id
      }
    }
  }
}
```

We can transform the data by the second plugin.

```graphql
{
  allMarkdownRemark(sort: { fields: [frontmatter___data], order: DESC }) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          image
          data(formatString: "MMMM YYYY")
        }
        excerpt
      }
    }
  }
}
```

<strong>5. Using Markdown</strong>

Create `markdown` folder in `src` and add markdown file.

# GraphQL Queries

```graphql
query getpost {
  markdownRemark(fields: { slug: { eq: "/welcome/" } }) {
    html
    frontmatter {
      title
      keyword
    }
  }
}

query second {
  file {
    absolutePath
  }
}

query getArticle {
  allMarkdownRemark(sort: { fields: [frontmatter___data], order: DESC }) {
    totalCount
    edges {
      node {
        id
        frontmatter {
          title
          image
          data(formatString: "MMMM YYYY")
        }
        fields {
          slug
        }
        excerpt
      }
    }
  }
}
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
