// Runs once in the process of building the site
// https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/

exports.onCreateBabelConfig = ({ actions }: any) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-transform-react-jsx',
    options: {
      runtime: 'automatic',
    },
  })
}
