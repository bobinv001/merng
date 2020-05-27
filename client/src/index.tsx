import * as React from 'react'
import { render } from 'react-dom'
import { ApolloProvider } from 'react-apollo'

import graphqlClient from './services/graphql'
import Root from './components/Root'

render(<ApolloProvider client={graphqlClient}>
  <Root />
</ApolloProvider>, document.getElementById('app'))
