import { gql } from 'apollo-server';

export const typeDefs = gql`
  type Query {
    movies: [Movie]
    movieById(id: Int): Movie
  }

  type Movie {
    id: Int!
    title: String!
    country: String!
    director: String!
    genra: [String!]!
    cast: [Cast!]!
    description: String!
    whyShouldWeWtach: String!
    quotes: [Quote!]!
    language: String
  }

  type Cast {
    character: String!
    actor: String!
  }

  type Quote {
    quotes: [String]
  }
`;
