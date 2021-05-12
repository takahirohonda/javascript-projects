import { rule } from 'graphql-shield';
import { ADMIN_ROLE, READONLY_ROLE } from '../constants';

export const isAuthenticated = rule({ cache: 'contextual' })(
  async (parent, args, ctx) => {
    return ctx.user !== null;
  },
);

export const isAdmin = rule({ cache: 'contextual' })(
  async (parent, args, { user }) => {
    return user.role.includes(ADMIN_ROLE);
  },
);

export const isReadOnly = rule({ cache: 'contextual' })(
  async (parent, args, { user }) => {
    return user.role.includes(READONLY_ROLE);
  },
);
