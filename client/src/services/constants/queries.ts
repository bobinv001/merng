import gql from 'graphql-tag';

export const FETCH_POSTS_QUERY = gql`
  {
    getAllBooks {
      id
      title
      category_id
      stock
      price
      publish_date
      author
      review
    }
  }
`;
