import fastify from 'fastify';
import routes from './routes/index';
import fastifyCors from 'fastify-cors';

// Load env vars
import loadConfig from './lib/config';
import db from './db';
loadConfig();

export async function createServer() {
  const server = fastify({
    logger: {
      level: process.env.LOG_LEVEL,
    },
  });

  server.register(routes);
  server.register(db, {uri: process.env.MONGODB_URI});
  server.register(fastifyCors);

  await server.ready();
  return server;
}

export async function startServer() {
  process.on('unhandledRejection', (err) => {
    console.error(err);
    process.exit(1);
  });

  const server = await createServer();
  await server.listen(+process.env.API_PORT, process.env.API_HOST);

  for (const signal of ['SIGINT', 'SIGTERM']) {
    process.on(signal, () =>
      server.close().then((err) => {
        console.log(`close application on ${signal}`);
        process.exit(err ? 1 : 0);
      }),
    );
  }
}

if (process.env.NODE_ENV !== 'test') {
  startServer();
}
