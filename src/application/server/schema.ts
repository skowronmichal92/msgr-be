import { fileLoader, mergeTypes } from 'merge-graphql-schemas';

// TODO fix absolute imports from baseUrl
import { getFilePath } from '../../common/utils';

const typesArray = fileLoader<string | Record<string, Function>>(
  getFilePath('../../../src'),
  {
    recursive: true,
  }
);

export const schema = mergeTypes(typesArray);
