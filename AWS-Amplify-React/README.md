# AWS Amplify React Application

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
mplify configure project
```

# temp


# Reference

## Prerequisite

Install `@aws-amplify/cli` globally and create a user with the amplify admin role with (see (https://docs.amplify.aws/start/getting-started/installation/q/integration/react/)

## Resources

[Getting started tutorial with React](https://docs.amplify.aws/start/getting-started/installation/q/integration/react/)

## Installation

Installing `aws-amplify` and ui lib.

```bash
yarn add aws-amplify @aws-amplify/ui-react
```
