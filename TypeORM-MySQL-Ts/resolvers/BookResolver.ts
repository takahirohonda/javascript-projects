import 'reflect-metadata';
import { Arg, Query, Resolver, Ctx } from 'type-graphql';
import { Book } from '../models'; 

@Resolver()
export class BookResolver {
  @Query(() => [Book])
  async books(@Ctx() { connection }: any) {
    return await connection.getRepository(Book).find();
  }

  @Query(() => Book)
  async book(@Arg('id', () => Number) id: number, @Ctx() { connection }: any) {
    return await connection.getRepository(Book).findOne({id});
  }
}
