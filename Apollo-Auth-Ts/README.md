# Apollo Auth Example

Example of Apollo auth example with TypeScript and Docker

## Get started

1. Local server
```
yarn local-server
```

2. Development with Docker

```bash
# First time
docker-compose up -d

# Start docker
docker-compose start
# Hot loading for compiling TypeScript
yarn develop
```

go to `http://localhost:4001/graphql`



## Dependencies

```bash
yarn add apollo-server graphql express

yarn add -D graphql-codegen eslint ts-node typescript graphql-codegen @graphql-codegen/typescript nodemon @graphql-codegen/introspection @graphql-codegen/typescript-resolvers @graphql-codegen/cli jest

# auth related
yarn add bycryptjs jsonwebtoken graphql-shield graphql-middleware
```

**Notes**

- graphql-codegen to create types from schema. see: https://graphql-code-generator.com/docs/getting-started/installation
