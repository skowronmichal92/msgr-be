import { buildSchema } from 'graphql';

// TODO fix absolute imports from baseUrl
import { USER_QUERY, USER_SCHEMA } from '../../modules/user';

// TODO better way to generate and split schema
export const schema = buildSchema(`
  type Query {
    ${USER_QUERY}
  }

  ${USER_SCHEMA}
`);
