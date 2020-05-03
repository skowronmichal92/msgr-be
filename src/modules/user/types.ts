interface IUser {
  id: string;
  name: string;
  user: string;
  avatar?: string;
}

interface IUserInput {
  id: string;
}

export type { IUser, IUserInput };
