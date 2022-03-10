import { 
  FastifyInstance, 
  FastifyPluginAsync 
} from 'fastify';
import fp from 'fastify-plugin';
import { Db } from '../db';
import { BlogRoutes } from './blogRoutes';

// Declaration merging
declare module 'fastify' {
    export interface FastifyInstance {
        db: Db;
    }
}

const Route: FastifyPluginAsync = async (server: FastifyInstance) => {

    server.get('/', {}, async (request, reply) => {
      try {
          return reply.code(200).send({hello: "world"});
      } catch (error) {
          request.log.error(error);
          return reply.send(500);
      }
    });
    BlogRoutes(server);
};
export default fp(Route);