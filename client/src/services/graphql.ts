import { ApolloClient } from 'apollo-client'
import { createHttpLink } from 'apollo-link-http'
import { InMemoryCache } from 'apollo-cache-inmemory'

export const cache = new InMemoryCache()

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql'
})

const client = new ApolloClient({
  cache,
  link: httpLink
})

export default client
