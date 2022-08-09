/* eslint-disable react/destructuring-assignment */

module.exports = (context) => {
  return {
    CatchClause(node) {
      const { body } = node.body

      const isErrorLogged = body.some(
        (item) =>
          item.type === 'ExpressionStatement' &&
          item?.expression?.type === 'CallExpression' &&
          item?.expression?.callee?.object?.name === 'ErrorLogger' &&
          item?.expression?.callee?.property?.name === 'reportError'
      )

      if (!isErrorLogged) {
        return context.report(
          node,
          node.loc,
          `Error logging is missing within the catch block - use ErrorLogger.reportError`
        )
      }

      return null
    },
  }
}
