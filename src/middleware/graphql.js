import graphqlHTTP from 'express-graphql';
import passport from './passport';
import schema from '../graphql/index';
import authConfig from '../config/auth-config';

export default graphqlHTTP((request, response) => new Promise((resolve) => {
  const next = (user) => {
    /**
    * GraphQL configuration goes here
    */
    resolve({
      schema,
      graphiql: process.env.NODE_ENV !== 'production', // <- only enable GraphiQL in production
      context: {
        user: user || null,
      },
    });
  };

  /**
  * Try to authenticate using passport,
  * but never block the call from here.
  */
  passport.authenticate('jwt', { session: authConfig.passportSession }, (error, user) => {
    next(user);
  })(request, response, next);
}));
