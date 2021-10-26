import React from 'react';
import { ApolloClient, ApolloProvider, DefaultOptions, HttpLink, InMemoryCache } from '@apollo/client';
import ProfilesPage from './components/ProfilesPage';
import { GRAPHQL_ENDPOINT } from './config';

const defaultOptions: DefaultOptions = {
  watchQuery: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'no-cache',
    errorPolicy: 'all',
  },
};

const client = new ApolloClient({
  cache: new InMemoryCache(),
  defaultOptions,
  link: new HttpLink({
    uri: GRAPHQL_ENDPOINT,
  }),
  credentials: 'same-origin',
});
const App = () => (
  <ApolloProvider client={client}>
    <ProfilesPage />
  </ApolloProvider>
);

export default App;
