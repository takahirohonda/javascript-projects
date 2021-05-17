import { PrismaClient } from '@prisma/client';
import { addAuthorFixtures } from './authorFixtures';
import { addBookFixtures } from './bookFixtures';

const prisma = new PrismaClient();

const runFixtures = async () => {
  console.log('Adding Author fixtures...');
  await addAuthorFixtures(prisma);
  console.log('Adding Book fixtures...');
  await addBookFixtures(prisma);
  prisma.$disconnect();
};

runFixtures();
