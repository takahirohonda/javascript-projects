import { ObjectType, Field } from 'type-graphql';
import { Author } from './author';

@ObjectType()
export class Book {
  @Field()
  id: number

  @Field()
  title: string

  @Field()
  authorId: number

  // eslint-disable-next-line no-unused-vars
  @Field(type => Author)
  author: Author
}
