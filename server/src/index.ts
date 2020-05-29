import 'reflect-metadata';
import { ApolloServer } from 'apollo-server-express';
import express from 'express';
import { buildSchema } from 'type-graphql';
import mongoose from 'mongoose';
const path = require('path');

import { BookResolver } from './resolvers/Book';
import { CategoriesResolver } from './resolvers/Categories';

(async () => {
  const schema = await buildSchema({
    resolvers: [BookResolver, CategoriesResolver],
    emitSchemaFile: true,
    validate: false,
  });

  const app = express();

  // create mongoose connection
  mongoose.connect('mongodb://localhost/graphQLTest', {
    useNewUrlParser: true,
  });

  mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
  });

  const server = new ApolloServer({ schema });
  // @ts-ignore
  server.applyMiddleware({ app });

  // Express: Port
  const PORT = 4000 || process.env;

  const staticPath = path.join(__dirname + '/../../client/dist');

  //set static folder
  app.use(express.static(staticPath));
  app.get('*', (req: any, res: any) => {
    res.sendFile(staticPath + '/index.html');
  });

  app.listen({ port: PORT }, () =>
    console.log(
      `🚀 Server ready at ==> http://localhost:${PORT}${server.graphqlPath}`,
    ),
  );
})().catch((error) => {
  console.log(error, 'error');
});
