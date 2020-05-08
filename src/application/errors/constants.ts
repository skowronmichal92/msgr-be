import { Errors, IError } from './types';

export const ERRORS: Record<Errors, IError> = {
  NO_USER_ID: { message: 'No user found with provided id', code: 'NO_USER_ID' },
};
