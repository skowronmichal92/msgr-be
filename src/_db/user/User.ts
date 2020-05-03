import { IUserConstructor } from './types';

export class User {
  id: string;
  name: string;
  user: string;
  avatar: string | undefined;

  constructor({ id, name, user, avatar }: IUserConstructor) {
    this.id = id;
    this.name = name;
    this.user = user;
    this.avatar = avatar;
  }
}
