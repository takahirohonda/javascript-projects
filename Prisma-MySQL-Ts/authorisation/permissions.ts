import { shield, and, or } from 'graphql-shield';
import { isAuthenticated, isAdmin, isReadOnly } from './rules';

// see https://www.npmjs.com/package/graphql-shield for further details
export const permissions = shield({
  Query: {
    movies: and(isAuthenticated, isAdmin),
    movieById: and(isAuthenticated, or(isAdmin, isReadOnly)),
  }
});
