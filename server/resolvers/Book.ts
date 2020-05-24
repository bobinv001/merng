import { Resolver, Arg, Query } from 'type-graphql';

import { Book, BookModel } from '../entities/Book';

@Resolver(Book)
export class BookResolver {
  @Query((_returns) => Book, { nullable: false })
  async getBook(@Arg('id') id: string) {
    return await BookModel.findById({ _id: id });
  }

  @Query(() => [Book])
  async getAllBooks() {
    return await BookModel.find();
  }
}
