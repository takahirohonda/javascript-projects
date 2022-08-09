1. Codegen

`amplify` can generate `API.ts`. We're opting to use `apollo cli` for type file generation because they are nicer although it gives us deprecated warnings. `graphql-codegen` seems to generate the types similar to `amplify generate`. Not sure if it is a new and better way forwards. I feel like it is nice to generates files per query with interface without nested types as `amplify generate` does.

```bash
# Generates graphql files and src/API.ts
amplify configure codegen

# generate
amplify codegen

# generate type files (using apollo)
yarn gql-typings
```

# Notes (don't bother looking unless desperate)

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
