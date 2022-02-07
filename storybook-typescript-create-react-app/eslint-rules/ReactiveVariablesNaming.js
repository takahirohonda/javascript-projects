/* eslint-disable react/destructuring-assignment */
module.exports = (context) => {
  return {
    VariableDeclarator(node) {
      const variableName = node.id.name

      const isCreatingRvVar =
        node.init && node.init.callee
          ? node.init.callee.name === 'makeVar'
          : false

      if (isCreatingRvVar) {
        if (!variableName.startsWith('rv')) {
          return context.report(
            node,
            node.loc,
            'All reactive vars should be started with prefix rv'
          )
        }
        return null
      }
      return null
    },
  }
}
