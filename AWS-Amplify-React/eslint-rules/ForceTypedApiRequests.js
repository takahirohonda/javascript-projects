/* eslint-disable react/destructuring-assignment */
module.exports = (context) => {
  return {
    VariableDeclarator(node) {
      const fnName =
        node.init && node.init.callee && node.init.callee.name
          ? node.init.callee.name
          : undefined
      const isRequest =
        fnName === 'useQuery' ||
        fnName === 'useMutation' ||
        fnName === 'useLazyQuery' ||
        fnName === 'useSubscription'
      if (isRequest) {
        if (
          !node.init.typeParameters ||
          node.init.typeParameters.params.length === 0
        ) {
          return context.report(
            node,
            node.loc,
            'All Queries, Mutations and Subscriptions have to be typed'
          )
        }
        return null
      }
      return null
    },
    CallExpression(node) {
      const fnName =
        node.callee && node.callee.name ? node.callee.name : undefined
      const isRequest =
        fnName === 'useQuery' ||
        fnName === 'useMutation' ||
        fnName === 'useLazyQuery' ||
        fnName === 'useSubscription'
      if (isRequest) {
        if (!node.typeParameters || node.typeParameters.params.length === 0) {
          return context.report(
            node,
            node.loc,
            'All Queries, Mutations and Subscriptions have to be typed'
          )
        }
        return null
      }
      return null
    },
  }
}
