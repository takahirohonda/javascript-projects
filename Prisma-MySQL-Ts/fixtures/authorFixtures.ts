import { PrismaClient } from '@prisma/client';

export const addAuthorFixtures = async (prisma: PrismaClient) => {
  await prisma.author.deleteMany();
  await prisma.author.createMany({
    data: [
      {
        id: 1,
        name: 'Leo Tolstoy'  
      },
      {
        id: 2,
        name: 'Charlotte Bronte'  
      },
    ],
    skipDuplicates: true
  });

  console.log('Check inserted data');
  const authors = await prisma.author.findMany();
  console.log(authors);
};
