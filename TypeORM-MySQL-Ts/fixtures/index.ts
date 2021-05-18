import {createConnection, Connection} from 'typeorm';
import { addBookFixtures } from './bookFixtures';

const runFixtures = async () => {
  const connection: Connection = await createConnection();
  await addBookFixtures();
  connection.close();
};

runFixtures();
