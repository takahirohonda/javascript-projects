import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import { MoviesDataSource } from './datasources/moviesDataSource';
import { typeDefs } from './schema';
import {resolvers } from './resolvers';
import { verifyHeaderToken } from './utils/auth';

require('dotenv').config(); // get local variable from .env file.

const app = express();

const dataSources = () => ({
  moviesDataSource: new MoviesDataSource()
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context: ({ req }: any) => {
    return verifyHeaderToken(req.header.authorization);
  }
});

server.applyMiddleware({ app });


app.listen(process.env.PORT || 4000, () => {
  console.log('graphQL running at port 4000');
});
