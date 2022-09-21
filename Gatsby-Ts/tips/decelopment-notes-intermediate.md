# Development note - Intermediate

## (1) Create a page from gatsby-node.js

In `gatsby-node.js`, we can add a hook (`createPages`) and create a page. It becomes interesting when we start passing the context. Context is available as the `pageContext` prop.

```js
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

## (2) Adding custom data to GraphQL Layer

We can add custom data to GraphQL Layer by adding hooks in `gatsby-node.js`.

```js
const chordProgression = require('./src/data/chord-progression.json')

exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode } = actions
  chordProgression.forEach((data) => {
    createNode({
      ...data,
      id: createNodeId(`chord-${data.id}`),
      parent: null,
      children: [],
      internal: {
        type: 'ChordProgression',
        content: JSON.stringify(data),
        contentDigest: createContentDigest(data),
      },
    })
  })
}
```

## (2) Adding relationship to data

We can add relationship to the data -> see gatsby-node
