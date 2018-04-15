import testType from '../type/index';

export default {
  test: {
    type: testType,
    resolve: (_, args, context) => {
      if (!context.user) throw new Error('invalid user');
      return context.user;
    },
  },
};
