import { ApolloServer } from 'apollo-server';
import { buildSchemaSync } from 'type-graphql';
import { resolvers } from './resolvers';
import { createConnection } from 'typeorm';

const main = async () => {
  const connection = await createConnection();

  const schema = buildSchemaSync({
    resolvers,
    emitSchemaFile: true
  });

  const server = new ApolloServer({
    schema,
    context: () => ({ connection }),
  });

  await server.listen(process.env.PORT || 4000);
  console.log('GraphQL with TypeORM running at port 4000');
};

main();
