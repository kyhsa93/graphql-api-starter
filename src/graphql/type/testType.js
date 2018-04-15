import {
  GraphQLObjectType,
  GraphQLString,
} from 'graphql';

export default new GraphQLObjectType({
  name: 'test',
  fields: () => ({
    id: { type: GraphQLString },
    testPassword: { type: GraphQLString },
  }),
});
