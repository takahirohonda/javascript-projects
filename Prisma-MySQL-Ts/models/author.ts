import { ObjectType, Field  } from 'type-graphql';
import { Book } from './book';

@ObjectType()
export class Author {
  @Field()
  id: number

  @Field()
  title: string

  @Field()
  authorId: number

  // eslint-disable-next-line no-unused-vars
  @Field(type => [Book] )
  book: Book
}
