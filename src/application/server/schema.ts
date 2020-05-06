import { buildSchema } from 'graphql';
import { fileLoader, mergeTypes } from 'merge-graphql-schemas';

// TODO fix absolute imports from baseUrl
import { getPath } from '../../common/utils';

const typesArray = fileLoader<string | Record<string, Function>>(
  getPath('../../modules'),
  {
    recursive: true,
  }
);
const mergedSchema = mergeTypes(typesArray);

export const schema = buildSchema(mergedSchema);
