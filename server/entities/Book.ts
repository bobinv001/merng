import { ObjectType, Field, ID, Int } from 'type-graphql';
import { prop as Property, getModelForClass, Ref } from '@typegoose/typegoose';
import { __Type } from 'graphql';

import { Categories } from './Categories';

@ObjectType({ description: 'The Book model' })
export class Book {
  @Field(() => ID)
  id: String;

  @Field()
  @Property()
  title: String;

  @Field()
  @Property()
  author: String;

  @Field()
  @Property()
  review: Number;

  @Field()
  @Property()
  publish_date: Date;

  @Field((_type) => Int)
  @Property()
  stock: number;

  @Field((_type) => Int)
  @Property()
  price: number;

  @Field((_type) => String)
  @Property({ ref: Categories })
  category_id: Ref<Categories>;

  _doc: any;
}

export const BookModel = getModelForClass(Book);
