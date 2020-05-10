import { IResolvers } from 'graphql-tools';

import { user } from '../../modules/user';

export const resolvers: IResolvers = {
  Query: {
    user,
  },
};
