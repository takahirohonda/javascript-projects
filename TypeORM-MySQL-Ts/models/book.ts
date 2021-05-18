import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";
import { ObjectType, Field } from 'type-graphql';

@ObjectType()
@Entity()
export class Book {

  @Field()
  @PrimaryGeneratedColumn()
  id: number

  @Field()
  @Column()
  title: string

  @Field()
  @Column()
  authorId: number

}
