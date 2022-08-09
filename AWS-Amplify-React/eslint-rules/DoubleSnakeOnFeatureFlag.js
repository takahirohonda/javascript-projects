/* eslint-disable react/destructuring-assignment */
const FEATURE_REGEXP = /^FEATURE_FLAG/
const FULL_PATTERN = /^FEATURE_FLAG__\w+/

module.exports = (context) => {
  return {
    VariableDeclarator(node) {
      const variableName = node.id.name

      if (FEATURE_REGEXP.test(variableName)) {
        if (FULL_PATTERN.test(variableName)) {
          return null
        }
        return context.report(
          node,
          node.loc,
          'Feature flags should follow pattern FEATURE_FLAG__CUSTOM_NAME'
        )
      }

      return null
    },
  }
}
