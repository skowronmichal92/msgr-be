import { User, IUserConstructor } from './user';
import usersData from './users.json';

const usersParsed = usersData.users as IUserConstructor[];

export const users = usersParsed.map((userData) => {
  return new User(userData);
});
