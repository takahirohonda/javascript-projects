# Gatsby Template with TypeScript

We are still using V2 because `gatsby-plugin-scss-typescript` is yet to support V3.

## REFERENCE

1. TypeScript Support

TypeScript is supported by Gatsby. All we need to do is to create tsx files instead of jsx files.

`gatby-plugin-typescript` is automatically included in Gatsby. If you need to configure options, we can explicitly use this plugin (https://www.gatsbyjs.com/plugins/gatsby-plugin-typescript/).

2. Installation

- SASS -> supported by `gatsby-plugin-sass` (for comipling global sass) and `gatsby-plugin-scss-typescript` (ebpack support for SCSS stylesheets modules & automatic generation of accompanying typing declaration (.d.ts) files). See further info [here](https://www.gatsbyjs.com/plugins/gatsby-plugin-scss-typescript/).
- MDX -> supported by `gatsby-plugin-mdx`

Instead of uing Gatsby starter kit, we just install dependencies.

```bash
# React, Typescript and Gatsby setup
yarn add react react-dom
yarn add gatsby typescript @types/react @types/react-dom jest ts-jest enzyme @types/jest @types/enzyme --dev

# To make config files into TypeScript (like gatsby-browser.ts)
yarn add gatsby-plugin-ts-config --dev

# Gatsby plugins
# Sass support
yarn add gatsby-plugin-sass gatsby-plugin-scss-typescript node-sass --dev
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
# Gatsby TypeScript Development

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

<strong>3. Quering Data with GraphQL</strong>

There are two types of GraphQL queries.

- Page Queries - happens on Page components: see example in `src/pages.index.js`.

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
  allMarkdownRemark(sort: {fields: [frontmatter___data], order: DESC}) {
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
  markdownRemark(fields: { slug: { eq: "/welcome/"}}) {
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
  allMarkdownRemark(sort: {fields: [frontmatter___data], order: DESC}) {
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
