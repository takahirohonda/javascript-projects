import { ReactNode } from "react";
import { createAuthLink } from "aws-appsync-auth-link";
import { createSubscriptionHandshakeLink } from "aws-appsync-subscription-link";

import {
  ApolloProvider,
  ApolloClient,
  InMemoryCache,
  HttpLink,
  ApolloLink,
  
} from "@apollo/client";

import appSyncConfig from "./aws-exports";

const url = appSyncConfig.aws_appsync_graphqlEndpoint;

const region = appSyncConfig.aws_appsync_region;

const auth = {
  type: appSyncConfig.aws_appsync_authenticationType as any, // AUTH_TYPE.API_KEY doesn't work here
  apiKey: appSyncConfig.aws_appsync_apiKey,
};

const httpLink = new HttpLink({ uri: url });       

const link = ApolloLink.from([
  createAuthLink({ url, region, auth }),
  createSubscriptionHandshakeLink({ url, region, auth }, httpLink),
]);

const client = new ApolloClient({
  link,
  cache: new InMemoryCache(),
});

interface ApolloWrapperProps {
  children: ReactNode
}
export const ApolloWrapper = ({ children }: ApolloWrapperProps) => 
  <ApolloProvider client={client}>{children}</ApolloProvider>
