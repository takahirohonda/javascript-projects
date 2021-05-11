require('dotenv').config(); // get local variable from .env file.
import { ApolloServer } from 'apollo-server-express';
import express from 'express';

import { MoviesDataSource } from './datasources/moviesDataSource';
import { typeDefs } from './schema';
import {resolvers } from './resolvers';

const app = express();

const dataSources = () => ({
  moviesDataSource: new MoviesDataSource()
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources,
  context: () => {}
});

server.applyMiddleware({ app });

// eslint-disable-next-line no-undef
app.listen(process.env.PORT || 4000, () => {
  console.log('graphQL running at port 4000');
});
