# Getting the code gen

So far... it is the same as `amplify codegen` command. 

Setting up Apollo & codegen

1. Installation

```bash
yarn add @apollo/client graphql
yarn add -D @graphql-codegen/cli @graphql-codegen/typescript
```

2. Initialise graphql-codegen

see: https://graphql-code-generator.com/docs/getting-started/installation

```bash
yarn graphql-codegen init
```


```json
{
  "scripts": {
    "gql-schema": "apollo schema:download --endpoint=put_endpoint_here graphql-schema.json --header='Authorization: put_token_here'",

    "gql-typings": "apollo codegen:generate --localSchemaFile=graphql-schema.json,local-schema.graphql --target=typescript --includes=src/graphql/merchant-portal/**/*.ts,src/pages/**/*.tsx,src/pages/**/*.ts,src/components/**/*.tsx,src/components/**/*.ts --excludes=src/graphql/merchant-portal/local/** --no-addTypename --globalTypesFile=src/types/gql-global-types.ts --outputFlat src/types/gql-types",

    "gql-update": "yarn gql-typings && prettier --write src/types/**"
  }
}
```

```bash
apollo client:codegen types --addTypename --globalTypesFile=src/components/$SCHEMA/types/global.ts --passthroughCustomScalars --customScalarsPrefix=GraphQL --target=typescript --config=apollo.config.$SCHEMA.js
```

```json

"gql-typings": "apollo codegen:generate --localSchemaFile=src/graphql/schema.json --target=typescript --includes=src/**/*.ts,src/**/*.tsx --no-addTypename --globalTypesFile=src/types/gql-global-types.ts --outputFlat src/types/gql-types",
```
