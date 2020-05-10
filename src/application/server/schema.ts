import { fileLoader, mergeTypes } from 'merge-graphql-schemas';

// TODO fix absolute imports from baseUrl
import { getPath } from '../../common/utils';

const typesArray = fileLoader<string | Record<string, Function>>(
  getPath('../../../src'),
  {
    recursive: true,
  }
);

export const schema = mergeTypes(typesArray);
