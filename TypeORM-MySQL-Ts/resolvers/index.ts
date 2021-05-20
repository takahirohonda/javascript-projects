import { NonEmptyArray } from 'type-graphql';
import { BookResolver } from './BookResolver';
import { AuthorResolver } from './AuthorResolver';


export const resolvers: NonEmptyArray<Function> = [
  BookResolver,
  AuthorResolver
];
