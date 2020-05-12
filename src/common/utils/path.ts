import path from 'path';

export const getFilePath = (pathRoute: string): string =>
  path.join(__dirname, ...pathRoute.split('/'));
