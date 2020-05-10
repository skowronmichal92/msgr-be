import { ApolloError } from 'apollo-server';

import { users } from '../../_db';
import { ERRORS } from '../../application/errors';
import { ResolverFunction } from '../../common/types';
import { User, QueryUserArgs } from '../../generated/graphql';

export const user: ResolverFunction<QueryUserArgs, undefined> = (
  _,
  { id }
): User => {
  const requestedUser = users.find(({ id: userId }) => userId === id);

  if (!requestedUser) {
    const { message, code } = ERRORS.NO_USER_ID;
    throw new ApolloError(message, code, { message });
  }

  return requestedUser;
};
