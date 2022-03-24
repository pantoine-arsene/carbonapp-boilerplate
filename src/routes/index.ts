import { 
  FastifyInstance, 
  FastifyPluginAsync 
} from 'fastify';
import fp from 'fastify-plugin';
import { Db } from '../db';
import { CobenefitRoutes } from './cobenefitRoutes';
import { CompanyRoutes } from './companyRoutes';
import { ContactRoutes } from './contactRoutes';
import { DossierRoutes } from './dossierRoutes';
import { MediaRoutes } from './mediaRoutes';
import { MethodRoutes } from './methodRoutes';
import { ProjectRoutes } from './projectRoutes';
import { SectorRoutes } from './sectorRoutes';

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
    ProjectRoutes(server);
    CobenefitRoutes(server);
    CompanyRoutes(server);
    ContactRoutes(server);
    DossierRoutes(server);
    MediaRoutes(server);
    MethodRoutes(server);
    SectorRoutes(server);
};
export default fp(Route);