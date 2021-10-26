require('dotenv').config()
const fs = require('fs');

const CONFIG_FILE_PATH = 'src/config/index.ts';

const GRAPHQL_ENDPOINT = process.env.SCHEMA_ENDPOINT

const fileContent = `export const GRAPHQL_ENDPOINT = '${GRAPHQL_ENDPOINT}';
`

fs.writeFile(CONFIG_FILE_PATH, fileContent, (err, data) => {
  if (err) console.error(`Error to generate config file: ${err}`);
  console.log(`Config file generated in ${CONFIG_FILE_PATH}`);
});
