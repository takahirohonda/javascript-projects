
import { getConnection } from 'typeorm';
import { Author, Book } from '../models';

const clearAllData = async () => {
  await getConnection()
    .createQueryRunner()
    .query('DELETE FROM book');
  await getConnection()
    .createQueryRunner()
    .query('DELETE FROM author');
  await getConnection()
    .createQueryRunner()
    .query('DELETE FROM author_books_book');
  await getConnection()
    .createQueryRunner()
    .query('DELETE FROM book_authors_author');
};

export const addBookFixtures = async () => {
  await clearAllData();

  const bookRepository = await getConnection().getRepository(Book);
  const authorRepository = await getConnection().getRepository(Author);

  // These won't work because of foreign key constraints
  // bookRepository.clear();
  // authorRepository.clear();

  // book 1
  const book1 = new Book();
  book1.title = 'Anna Karenina';

  // book 2
  const book2 = new Book();
  book2.title = 'Jane Eyre';
  
  // Add book data
  await bookRepository.save([book1, book2]);

  // author 1
  const author1 = new Author();
  author1.name = 'Leo Tolstoy';

  // author 2
  const author2 = new Author();
  author2.name = 'Emily Bronte';

  // Add author data
  await authorRepository.save([author1, author2]);

  // Getting relationships
  const book1Record = await bookRepository.findOne({ title: 'Anna Karenina'}) as Book;
  const book2Record = await bookRepository.findOne({ title: 'Jane Eyre' }) as Book;
  const author1Record = await authorRepository.findOne({ name: 'Leo Tolstoy'}) as Author;
  const author2Record = await authorRepository.findOne({ name: 'Emily Bronte'}) as Author;

  book1Record.authors = [author1Record];
  book2Record.authors = [author2Record];
  author1Record.books = [book1Record];
  author2Record.books = [book2Record];

  await bookRepository.save(book1Record);
  await bookRepository.save(book2Record);
  await authorRepository.save(author1Record);
  await authorRepository.save(author2Record);

  console.log('Database updated.');
  console.log('Checking records now...');

  const books = await bookRepository
    .createQueryBuilder('book')
    .leftJoinAndSelect('book.authors', 'author')
    .getMany();

  const authors = await authorRepository
    .createQueryBuilder('author')
    .leftJoinAndSelect('author.books', 'book')
    .getMany();

  console.log(JSON.stringify(books));
  console.log(JSON.stringify(authors));
};

// Just an example
export const addBookFixturesExample1 = async () => {
  await getConnection()
    .createQueryRunner()
    .query('DELETE FROM book');

  await getConnection()
    .createQueryBuilder()
    .insert()
    .into(Book)
    .values([
      {
        title: 'Anna Karenina',
        authors: [
          {
            name: 'Leo Tolstoy'
          }
        ]
      },
      {
        title: 'Jane Eyre',
        authors: [
          {
            name: 'Emily Bronte'
          }
        ]
      },
    ])
    .execute();
};
