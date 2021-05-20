import { Entity, PrimaryGeneratedColumn, Column, ManyToMany, JoinTable } from 'typeorm';
import { ObjectType, Field, Int } from 'type-graphql';
import { Book } from './book';

@ObjectType()
@Entity()
export class Author {

  // eslint-disable-next-line no-unused-vars
  @Field(type => Int)
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  name: string

  // eslint-disable-next-line no-unused-vars
  @Field(type => [Book])
  @ManyToMany(() => Book, book => book.authors, {
    onDelete: 'CASCADE'
  })
  @JoinTable()
  books: Book[]
}
