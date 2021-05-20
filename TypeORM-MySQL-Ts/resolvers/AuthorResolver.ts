import 'reflect-metadata';
import { Arg, Query, Resolver } from 'type-graphql';
import { getConnection } from 'typeorm';
import { Author } from '../models'; 

@Resolver()
export class AuthorResolver {
  @Query(() => [Author])
  async authors() {
    return await getConnection().getRepository(Author).find({ relations: ['books']});
  }

  @Query(() => Author)
  async author(@Arg('id', () => Number) id: number) {
    return await getConnection().getRepository(Author).findOne({ where: { id }, relations: ['books'] });
  }
}
