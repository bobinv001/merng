import { Resolver, Arg, Query, Mutation } from 'type-graphql';

import { Book, BookModel } from '../entities/Book';
import { BookInput } from './types/book-input';

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

  @Mutation(() => Book)
  async addBook(
    @Arg('data')
    {
      title,
      author,
      review,
      stock,
      price,
      publish_date,
      category_id,
    }: BookInput,
  ): Promise<Book> {
    const book = (
      await BookModel.create({
        title,
        author,
        review,
        stock,
        price,
        publish_date,
        category_id,
      })
    ).save();
    return book;
  }

  @Mutation(() => Boolean)
  async deleteBook(@Arg('id') id: string) {
    await BookModel.deleteOne({ id });
    return true;
  }
}
