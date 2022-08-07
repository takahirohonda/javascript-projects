# AWS Amplify React Application

## Frontend

1. Codegen

`amplify` can generate `API.ts`. We're opting to use `apollo client:codegen` for type file generation because they are nicer although it gives us deprecated warnings. Apollo recommends to use [graphql-code-generator](https://www.graphql-code-generator.com/). However, it seems to generate the types similar to `amplify generate`. Not sure if it is a new and better way forwards. I feel like it is nice to generates files per query with interface without nested types as `amplify generate` does.



```bash
# Generates graphql files and src/API.ts
amplify configure codegen

# generate
amplify codegen

# generate type files (using apollo)
yarn gql-typings
```

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

## (3) Publish

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

# Reference

## Prerequisite

Install `@aws-amplify/cli` globally and create a user with the amplify admin role with (see (https://docs.amplify.aws/start/getting-started/installation/q/integration/react/)

## Resources

[Getting started tutorial with React](https://docs.amplify.aws/start/getting-started/installation/q/integration/react/)

[Apollo with AppSync](https://github.com/awslabs/aws-mobile-appsync-sdk-js#react--react-native)

## Installation

Installing `aws-amplify` and ui lib.

```bash
yarn add aws-amplify @aws-amplify/ui-react
```

