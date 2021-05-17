
import { ApolloServer } from 'apollo-server';
import { buildSchemaSync } from 'type-graphql';

import { resolvers } from './resolvers';

const schema = buildSchemaSync({
  resolvers
});

const server = new ApolloServer({
  schema
});

server.listen(process.env.PORT || 4000, () => {
  console.log('graphQL running at port 4000');
});
