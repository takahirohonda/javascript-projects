# prisma & type-graphql

## (1) Generate a physical schema file. 

We can add `emitSchemaFile: true` in `buildSchemaSync()` in `index.ts`.

## (2) Generate a models in the custom folder.

We could have an output option in `schema.prisma`

```
generator typegraphql {
  provider = "typegraphql-prisma"
}
```
