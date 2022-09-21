// Runs once in the process of building the site
// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/

exports.onCreateBabelConfig = ({ actions }) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic',
    },
  })
}

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
