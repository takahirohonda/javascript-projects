
import { ApolloServer } from 'apollo-server';
import { buildSchemaSync } from 'type-graphql';

import { resolvers } from './resolvers';

import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

const schema = buildSchemaSync({
  resolvers,
  emitSchemaFile: true
});

const server = new ApolloServer({
  schema,
  /*
  * When using the generated resolvers,
  * you have to first provide the PrismaClient instance into the context under prisma key,
  * to make it available for the crud and relations resolvers
  */
  context: () => ({ prisma }),
});

server.listen(process.env.PORT || 4000, () => {
  console.log('graphQL running at port 4000');
});
