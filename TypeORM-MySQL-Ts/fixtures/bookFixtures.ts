
import {getConnection} from 'typeorm';
import { Book } from '../models';

export const addBookFixtures = async () => {
  await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Book)
    .values([
      {
        title: 'Anna Karenina',
        authorId: 1
      },
      {
        title: 'Jane Eyre',
        authorId: 2,
      },
    ])
    .execute();
};
