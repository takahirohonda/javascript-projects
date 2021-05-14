The example is not usig graphql-shield. We can do authorisation in resolver by getting the user role from the context.

index.ts

```TypeScript
const server = new ApolloServer({
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
```
