# Quick note

Maybe change the meta content depending on the page?

```html
<meta property="og:type" content="article" />
<meta property="og:type" content="website" />
```

# Other notes

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

<strong>4. Using Markdown</strong>

Create `markdown` folder in `src` and add markdown file. We need to install plugins and configure.

```bash
yarn add gatsby-source-filesystem gatsby-transformer-remark --dev
```

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
