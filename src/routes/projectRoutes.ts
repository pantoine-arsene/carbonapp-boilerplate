import { ProjectController } from "../controllers/projectController";
import { FastifyInstance } from "fastify";
import { ProjectAttrs } from '../models/projectModel';

export const ProjectRoutes = async (server: FastifyInstance) => {

    const projectController = new ProjectController(server);

    server.get('/projects', {}, async (request, reply) => projectController.getAll(request, reply));
    server.post<{ Body: ProjectAttrs }>('/projects', {}, async (request, reply) => projectController.create(request, reply));
    server.get<{ Params: {id: string} }>('/projects/:id', {}, async (request, reply) => projectController.getById(request, reply));

}

