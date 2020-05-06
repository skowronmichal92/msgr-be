import { users } from '../../_db';

import { IUserInput, IUser } from './types';

export const user = ({ id }: IUserInput): IUser => {
  const requestedUser = users.find(({ id: userId }) => userId === id);

  if (!requestedUser) {
    throw new Error(`No user found with id ${id}`);
  }

  return requestedUser;
};
