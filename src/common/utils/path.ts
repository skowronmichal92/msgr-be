import path from 'path';

export const getPath = (pathRoute: string): string =>
  path.join(__dirname, ...pathRoute.split('/'));
