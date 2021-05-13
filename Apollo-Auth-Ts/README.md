# Apollo Auth Example

Example of Apollo auth example with TypeScript and Docker

## Get started

**Start Local Server**

```bash
# Open server at http://localhost:4000/graphql
yarn local-server
```

**Local development with Docker**

```bash
# Open server at http://localhost:4001/graphql
# First time
docker-compose -f docker-compose.local.yml up -d
# Rebuild
docker-compose -f docker-compose.local.yml up --build -d
# Start docker
docker-compose start
# Hot loading for compiling TypeScript
yarn develop
```

**Deployment**

Deployment uses docker-compose.yml file

```bash
# Deployment to Elastic Beanstalk
eb init # to create .elasticbeanstalk (files committed)

```



## Dependencies

```bash
yarn add apollo-server graphql express

yarn add -D graphql-codegen eslint ts-node typescript graphql-codegen @graphql-codegen/typescript nodemon @graphql-codegen/introspection @graphql-codegen/typescript-resolvers @graphql-codegen/cli jest

# auth related
yarn add bycryptjs jsonwebtoken graphql-shield graphql-middleware
```

**Notes**

- graphql-codegen to create types from schema. see: https://graphql-code-generator.com/docs/getting-started/installation
