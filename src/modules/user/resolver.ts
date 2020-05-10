import { ApolloError } from 'apollo-server';

import { users } from '../../_db';
import { ERRORS } from '../../application/errors';
import { ResolverFunction } from '../../common/types';

import { IUserInput, IUser } from './types';

export const user: ResolverFunction<IUserInput, undefined> = (
  _,
  { id }
): IUser => {
  const requestedUser = users.find(({ id: userId }) => userId === id);

  if (!requestedUser) {
    const { message, code } = ERRORS.NO_USER_ID;
    throw new ApolloError(message, code, { message });
  }

  return requestedUser;
};
