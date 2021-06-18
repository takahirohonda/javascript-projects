#!/bin/sh

echo "Running migration"
yarn prisma migrate dev --name init
echo "Inserting fixtures"
yarn fixtures
echo "Compiling TypeScript"
yarn build
echo "Starting app"
node dist/index.js
