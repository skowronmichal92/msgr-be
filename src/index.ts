import { ApolloServer } from 'apollo-server';

import { resolvers, schema } from './application/server';

const server = new ApolloServer({
  typeDefs: schema,
  resolvers,
  cors: true,
  playground: true,
});

server.listen(9000).then(({ url }) => {
  console.log(`Server running at ${url}`);
});
