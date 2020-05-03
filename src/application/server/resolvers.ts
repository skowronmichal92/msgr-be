import { userResolver } from '../../modules/user';

export const root = {
  user: userResolver,
};
