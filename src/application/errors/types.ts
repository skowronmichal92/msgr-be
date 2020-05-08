type Errors = 'NO_USER_ID';

interface IError {
  message: string;
  code: Errors;
}

export type { Errors, IError };
