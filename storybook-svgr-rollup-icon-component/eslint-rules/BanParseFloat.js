/* eslint-disable react/destructuring-assignment */

module.exports = (context) => {
  return {
    CallExpression(node) {
      const fnName = node.callee.name

      if (fnName === 'parseFloat') {
        return context.report(
          node,
          node.loc,
          "Please don't use parseFloat. For banking applications we are only using int values to avoid issues with precision. Use parseApiMoney instead."
        )
      }
      return undefined
    },
  }
}
