import { GraphQLRequestContext } from 'apollo-server-types';
import { IFieldResolver } from 'graphql-tools';

export type ResolverFunction<
  TArgs,
  TSource = any,
  TContext = any
> = IFieldResolver<TSource, GraphQLRequestContext<TContext>, TArgs>;
