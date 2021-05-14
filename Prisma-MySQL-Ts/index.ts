/* eslint-disable no-unused-vars */
import { ApolloServer, makeExecutableSchema } from 'apollo-server-express';
import { applyMiddleware } from 'graphql-middleware';
import express from 'express';

import { MoviesDataSource } from './datasources/moviesDataSource';
import { typeDefs } from './schema';
import {resolvers } from './resolvers';
import { verifyHeaderToken } from './utils/auth';
// import { permissions } from './authorisation/permissions';

require('dotenv').config(); // get local variable from .env file.

const app = express();

const dataSources = () => ({
  moviesDataSource: new MoviesDataSource()
});

const server = new ApolloServer({
  // Turning off auth for now
  // schema: applyMiddleware(
  //   makeExecutableSchema({ typeDefs, resolvers }),
  //   permissions
  // ),
  typeDefs,
  resolvers,
  dataSources,
  context: ({ req }: any) => {
    const token = req.headers?.authorization;
    console.log(verifyHeaderToken(token)?.user);
    if (token) {
      return { user: verifyHeaderToken(token)?.user };
    }
    return null;
  }
});

server.applyMiddleware({ app });


app.listen(process.env.PORT || 4000, () => {
  console.log('graphQL running at port 4000');
});
