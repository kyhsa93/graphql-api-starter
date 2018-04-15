import compression from 'compression';

export default (request, response) => {
  if (request.headers['x-no-compresion']) return false;
  return compression.filter(request, response);
};
