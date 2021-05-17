import { NonEmptyArray } from 'type-graphql';
import { BookResolver } from './BookResolver';
import { AuthorResolver } from './AuthorResolver';
import { BookRelationsResolver, AuthorRelationsResolver } from '@generated/type-graphql';

export const resolvers: NonEmptyArray<Function> = [
  BookResolver,
  BookRelationsResolver,
  AuthorResolver,
  AuthorRelationsResolver
];
