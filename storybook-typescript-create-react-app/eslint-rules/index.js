/* eslint-disable */

module.exports = {
  rules: {
    'double-snake-on-feature-flag': require('./DoubleSnakeOnFeatureFlag.js'),
    'ban-raw-apollo-use-subscription': require('./BanRawApolloUseSubscription.js'),
    'ban-parse-float': require('./BanParseFloat.js'),
    'force-typed-api-requests': require('./ForceTypedApiRequests.js'),
    'styled-components-naming': require('./StyledComponentsNaming.js'),
    'prevent-unused-imports': require('./PreventUnusedImports.js'),
    'missing-error-logging-in-catch': require('./MissingErrorLoggingInCatch.js'),
  },
}
