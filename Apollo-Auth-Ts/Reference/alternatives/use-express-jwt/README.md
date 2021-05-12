## (1) Using express-jwt

Since we are wrapping Apollo with express, we can use express-jwt module.

```typescript
app.use(
  expressJwt({
    secret: 'mysecretgoeshere',
    algorithms: ['HS256'],
    credentialsRequired: false
  })
);

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => {
    const user = req.user || null;
    return { user }
  }
});
```
