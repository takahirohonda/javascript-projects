# Development note - Intermediate

## (1) Create a page from gatsby-node.js

In `gatsby-node.js`, we can add a hook (`createPages`) and create a page. It becomes interesting when we start passing the context. Context is available as the `pageContext` prop.

```ts
exports.createPages = ({ actions }) => {
  const { createPage } = actions
  createPage({

    path: '/custom',
    component: require.resolve('./src/templates/custom.tsx'),
    context: {
      title: 'custom page example',
      description: 'This is my custom page from gatsby-node.js',

    },
  })
}
```
