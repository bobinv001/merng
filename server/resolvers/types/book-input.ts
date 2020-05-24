import { ObjectId } from 'mongodb';
import { InputType, Field } from 'type-graphql';
import { Length } from 'class-validator';

import { Book } from '../../entities/Book';

@InputType()
export class BookInput implements Partial<Book> {
  @Field()
  title: String;

  @Field()
  @Length(1, 255)
  author: String;

  @Field()
  review: number;

  @Field()
  stock: number;

  @Field()
  price: number;

  @Field()
  publish_date: Date;

  @Field(() => String)
  category_id: ObjectId;
}
