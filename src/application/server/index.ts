import cors from 'cors';
import express from 'express';
import graphqlHTTP from 'express-graphql';

import { resolvers } from './resolvers';
import { schema } from './schema';

const app = express();

app.use(cors());
app.use(
  '/graphql',
  graphqlHTTP({
    schema: schema,
    rootValue: resolvers,
    graphiql: true,
  })
);

app.listen(9000);
