// Runs once in the process of building the site
// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/

const chordProgression = require('./src/data/chord-progression.json')
const authors = require('./src/data/authors.json')
const books = require('./src/data/books.json')

// Adding custom data to the GraphQL Layer
exports.sourceNodes = ({ actions, createNodeId, createContentDigest }) => {
  const { createNode, createTypes } = actions

  createTypes(`
    type Author implements Node {
      books: [Book!]! @link(from: "slug" by: "author.slug")
    }

    type Book implements Node {
      author: Author! @link(from: "author" by: "slug")
    }
  `)

  authors.forEach((author) => {
    createNode({
      ...author,
      id: createNodeId(`author-${author.slug}`),
      parent: null,
      children: [],
      internal: {
        type: 'Author',
        content: JSON.stringify(author),
        contentDigest: createContentDigest(author),
      },
    })
  })

  books.forEach((book) => {
    createNode({
      ...book,
      id: createNodeId(`book-${book.isbn}`),
      parent: null,
      children: [],
      internal: {
        type: 'Book',
        content: JSON.stringify(book),
        contentDigest: createContentDigest(book),
      },
    })
  })

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

// Customise build for react-jsx
exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic',
    },
  })
}

// Creating a custom page
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
