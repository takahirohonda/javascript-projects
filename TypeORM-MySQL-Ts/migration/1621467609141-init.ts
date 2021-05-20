import {MigrationInterface, QueryRunner} from "typeorm";

export class init1621467609141 implements MigrationInterface {
    name = 'init1621467609141'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("CREATE TABLE `author` (`id` int NOT NULL AUTO_INCREMENT, `name` varchar(255) NOT NULL, PRIMARY KEY (`id`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `book_authors_author` (`bookId` int NOT NULL, `authorId` int NOT NULL, INDEX `IDX_9bf58ffb2a12a8609a738ee8ca` (`bookId`), INDEX `IDX_a4cafdf2ec9974524a5321c751` (`authorId`), PRIMARY KEY (`bookId`, `authorId`)) ENGINE=InnoDB");
        await queryRunner.query("CREATE TABLE `author_books_book` (`authorId` int NOT NULL, `bookId` int NOT NULL, INDEX `IDX_e9ac29df6d093aa0b8079f1d15` (`authorId`), INDEX `IDX_34342925729041ac5301b289a9` (`bookId`), PRIMARY KEY (`authorId`, `bookId`)) ENGINE=InnoDB");
        await queryRunner.query("ALTER TABLE `book` DROP COLUMN `authorId`");
        await queryRunner.query("ALTER TABLE `book_authors_author` ADD CONSTRAINT `FK_9bf58ffb2a12a8609a738ee8cae` FOREIGN KEY (`bookId`) REFERENCES `book`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `book_authors_author` ADD CONSTRAINT `FK_a4cafdf2ec9974524a5321c7516` FOREIGN KEY (`authorId`) REFERENCES `author`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `author_books_book` ADD CONSTRAINT `FK_e9ac29df6d093aa0b8079f1d151` FOREIGN KEY (`authorId`) REFERENCES `author`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
        await queryRunner.query("ALTER TABLE `author_books_book` ADD CONSTRAINT `FK_34342925729041ac5301b289a9a` FOREIGN KEY (`bookId`) REFERENCES `book`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION");
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query("ALTER TABLE `author_books_book` DROP FOREIGN KEY `FK_34342925729041ac5301b289a9a`");
        await queryRunner.query("ALTER TABLE `author_books_book` DROP FOREIGN KEY `FK_e9ac29df6d093aa0b8079f1d151`");
        await queryRunner.query("ALTER TABLE `book_authors_author` DROP FOREIGN KEY `FK_a4cafdf2ec9974524a5321c7516`");
        await queryRunner.query("ALTER TABLE `book_authors_author` DROP FOREIGN KEY `FK_9bf58ffb2a12a8609a738ee8cae`");
        await queryRunner.query("ALTER TABLE `book` ADD `authorId` int NOT NULL");
        await queryRunner.query("DROP INDEX `IDX_34342925729041ac5301b289a9` ON `author_books_book`");
        await queryRunner.query("DROP INDEX `IDX_e9ac29df6d093aa0b8079f1d15` ON `author_books_book`");
        await queryRunner.query("DROP TABLE `author_books_book`");
        await queryRunner.query("DROP INDEX `IDX_a4cafdf2ec9974524a5321c751` ON `book_authors_author`");
        await queryRunner.query("DROP INDEX `IDX_9bf58ffb2a12a8609a738ee8ca` ON `book_authors_author`");
        await queryRunner.query("DROP TABLE `book_authors_author`");
        await queryRunner.query("DROP TABLE `author`");
    }

}
