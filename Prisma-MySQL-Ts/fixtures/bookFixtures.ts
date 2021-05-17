import { PrismaClient } from '@prisma/client';

export const addBookFixtures = async (prisma: PrismaClient) => {
  await prisma.book.deleteMany();
  await prisma.book.createMany({
    data: [
      {
        title: 'Anna Karenina',
        authorId: 1
      },
      {
        title: 'Jane Eyre',
        authorId: 2,
      },
    ],
    skipDuplicates: true
  });

  console.log('Check inserted data');
  const books = await prisma.book.findMany();
  console.log(books);

};
