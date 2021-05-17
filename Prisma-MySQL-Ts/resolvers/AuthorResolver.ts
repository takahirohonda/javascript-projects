import 'reflect-metadata';
import { Arg, Query, Resolver } from 'type-graphql';
import { Author } from '@generated/type-graphql';
// import { Author } from '../models'; // Instead of @generated/type-graphql, use custom model here.
import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

@Resolver()
export class AuthorResolver {
  @Query(() => [Author])
  async authors() {
    return await prisma.author.findMany({
      include: {
        book: true,
      }
    });
  }

  @Query(() => Author)
  async author(@Arg('id', () => Number) id: number) {
    return await prisma.author.findFirst({
      where: {
        id
      }
    });
  }
}
