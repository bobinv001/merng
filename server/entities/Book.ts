import { ObjectType, Field, ID, Int } from 'type-graphql';
import { prop as Property, getModelForClass } from '@typegoose/typegoose';
// import { Ref } from "../types";
// import {Categories} from "./Categories";
import { __Type } from 'graphql';

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
  publishDate: Date;

  @Field((_type) => Int)
  @Property()
  stock: number;

  @Field((_type) => Int)
  @Property()
  price: number;

  //   @Field((_type) => String)
  //   @Property({ ref: Categories })
  //   category_id: Ref<Categories>;
  //   _doc: any;
}

export const BookModel = getModelForClass(Book);
