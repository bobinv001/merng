import * as React from 'react';
import { useQuery } from '@apollo/react-hooks';
import { Grid, Transition } from 'semantic-ui-react';

import { FETCH_POSTS_QUERY } from '../../services/constants/queries';

const Books = () => {
  const { loading, data } = useQuery(FETCH_POSTS_QUERY);

  if (!data) {
    return null;
  }

  const books = data.getAllBooks;

  return (
    <Grid columns={3}>
      <Grid.Row className="page-title">
        <h1>Books</h1>
      </Grid.Row>
      <Grid.Row>
        {loading ? (
          <h1>Loading books..</h1>
        ) : (
          <Transition.Group>
            {books &&
              books.map((book) => (
                <Grid.Column key={book.id} style={{ marginBottom: 20 }}>
                  <div>Title: {book.title}</div>
                  <div> Author: {book.author}</div>
                  <div> Review: {book.review}</div>
                  <div>Stock: {book.stock}</div>
                  <div> Price: {book.price}</div>
                  <div> Published date: {book.publish_date}</div>
                </Grid.Column>
              ))}
          </Transition.Group>
        )}
      </Grid.Row>
    </Grid>
  );
};

export default Books;
