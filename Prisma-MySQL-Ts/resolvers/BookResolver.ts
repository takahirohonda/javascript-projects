import 'reflect-metadata';
import { Arg, Query, Resolver } from 'type-graphql';
import { Book } from '../models'; // Instead of @generated/type-graphql, use custom model here.
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Resolver()
class BookResolver {
  @Query(() => [Book])
  async books() {
    return await prisma.book.findMany();
  }

  @Query(() => Book)
  async book(@Arg('id', () => Number) id: number) {
    return await prisma.book.findFirst({
      where: {
        id
      }
    });
  }
}

export default BookResolver;
