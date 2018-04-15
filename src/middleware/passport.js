import passport from 'passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import authConfig from '../config/auth-config';

const params = {
  secretOrKey: authConfig.secret,
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
};

export default passport.use(new Strategy(params, (payload, done) => {
  /**
   * Here, we have to find the user
   * based on the given token (authentication).
   * Assuming we use the Bearer strategy,
   * but we can replace the strategy with any other strategy of course.
   */
  // bind user info named 'user' in payload
  const user = payload;
  /**
  * Just pass `undefined` as fallback,
  * so the authorization can happen in your GraphQL Schema resolve functions.
  */
  // return to auth result
  done(null, user || undefined);
}));
