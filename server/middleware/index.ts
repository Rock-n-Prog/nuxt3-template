import { config } from 'dotenv';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { connection } from 'mongoose';
import schema from '../schema';
import { connect } from '../infra/db';

config();

async function startServer() {
  await connect();

  const app = express();

  // TODO: What to do with outdated config?
  const server = new ApolloServer({
    schema,
    // cors: true,
    // playground: process.env.NODE_ENV === 'development' ? true : false,
    introspection: true,
    // tracing: true,
    // path: '/',
  });

  server.applyMiddleware({
    app,
    path: '/',
    cors: true,
    onHealthCheck: () =>
      new Promise((resolve, reject) => {
        if (connection.readyState > 0) {
          resolve(null);
        } else {
          reject();
        }
      }),
  });

  app.listen({ port: process.env.PORT }, () => {
    console.log(`🚀 Server listening on port ${process.env.PORT}`);
    console.log(`😷 Health checks available at ${process.env.HEALTH_ENDPOINT}`);
  });
}

startServer();
