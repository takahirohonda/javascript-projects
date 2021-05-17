import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const createRecords = async () => {
  await prisma.book.createMany({
    data: [
      {
        title: 'Anna Karenina',
        author: 'Leo Tolstoy'  
      },
      {
        title: 'Jane Eyre',
        author: 'Charlotte Bronte'  
      },
    ],
    skipDuplicates: true
  });
  
  process.exit();
};

createRecords();
