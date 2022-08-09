## (1) Deploying API

We can update `amplify/backend/api/awsamplifyreacttest/schema.graphql` and do push.

```bash
amplify push

# To view GraphQL Api in the AppSync console
amplify console api

# To view entire app in the Amplify console
amplify console
```

## (2) Add Auth

```bash
amplify add auth
amplify push
```

## (3) Pulish

```bash
amplify add hosting
amplify publish

# Delete
amplify delete

# Check status
amplify status

# To change config in case we have AccessDenied error
amplify configure project
```
