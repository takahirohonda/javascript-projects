/* eslint-disable react/destructuring-assignment */
module.exports = (context) => {
  return {
    ImportSpecifier(node) {
      const importName = node.imported.name
      const moduleName = node.parent.source.value

      if (importName === 'useSubscription' && moduleName === '@apollo/client') {
        return context.report(
          node,
          node.loc,
          "Don't use useSubscription directly from Apollo. Use useSubscription from hooks/useSubscription instead"
        )
      }

      return null
    },
  }
}
