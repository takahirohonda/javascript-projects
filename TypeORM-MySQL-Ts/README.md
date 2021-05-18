# Building GraphQL APIs with TypeORM, MySQL and TypeScript

## Get started

```bash
# Install Dependencies
yarn install
# Start containers
docker-compose -f docker-compose.local.yml up -d

# Run migration (optionally, we can pass the argument)
yarn prisma-migrate --name init
# run fixture
yarn fixture
# Start local server and go to localhost:4000/graphql
yarn start-local

```

## REFERENCE

### Installation

```bash
yarn add typeorm
```

### Easy start up

We can create the startup project with typeorm command.

```bash
yarn typeorm init --name Starter --database mysql
```

### DB setup

Database connection details are in `ormconfig.json`

### Migration

```bash
typeorm migration:run
typeorm migration:generate -- -n migrationNameHere
```
