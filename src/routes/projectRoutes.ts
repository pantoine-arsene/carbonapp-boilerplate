import { ProjectController } from "../controllers/projectController";
import { FastifyInstance } from "fastify";
import { CreateProjectDto } from '../models/projectModel';

export const ProjectRoutes = async (server: FastifyInstance) => {

    const projectController = new ProjectController(server);

    server.get('/projects', {}, async (request, reply) => projectController.getAll(request, reply));
    server.post<{ Body: CreateProjectDto }>('/projects', {}, async (request, reply) => projectController.create(request, reply));
    server.get<{ Params: {id: string} }>('/projects/:id', {}, async (request, reply) => projectController.getById(request, reply));
    server.patch<{ Params: {id: string}, Body: CreateProjectDto }>('/projects/:id', {}, async (request, reply) => projectController.update(request, reply));
    server.delete<{ Params: {id: string} }>('/projects/:id', {}, async (request, reply) => projectController.delete(request, reply));
}