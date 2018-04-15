// absolute import
import express from 'express';
import compression from 'compression';

// relative import
import passport from './src/middleware/passport';
import compress from './src/middleware/compress';
import graphql from './src/middleware/graphql';
import serverConfig from './src/config/server-config';

const app = express();

app.use(compression({ filter: compress }));
app.use(passport.initialize());
app.use('/graphql', graphql);
app.disable('x-powered-by');

/*eslint-disable*/
app.listen(serverConfig.port, () => {
  console.log(`app listening on ${serverConfig.port}`);
});
