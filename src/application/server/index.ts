import cors from 'cors';
import express from 'express';
import graphqlHTTP from 'express-graphql';

import { root } from './resolvers';
import { schema } from './schema';

const app = express();

app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: root,
    graphiql: true,
  })
);

app.listen(9000);
