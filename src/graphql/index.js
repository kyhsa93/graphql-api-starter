import { GraphQLSchema, GraphQLObjectType } from 'graphql';
import query from './query/index';

export default new GraphQLSchema({
  query: new GraphQLObjectType({
    name: 'RootQueryType',
    fields: query,
  }),
});
