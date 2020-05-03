import { users } from '../../_db';

import { IUserInput, IUser } from './types';

export const userResolver = ({ id }: IUserInput): IUser => {
  const user = users.find(({ id: userId }) => userId === id);

  if (!user) {
    throw new Error(`No user found with id ${id}`);
  }

  return user;
};
