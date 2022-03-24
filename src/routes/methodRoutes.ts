import { MethodController } from "../controllers/methodController";
import { FastifyInstance } from "fastify";
import { CreateMethodDto } from '../models/methodModel';

export const MethodRoutes = async (server: FastifyInstance) => {

    const methodController = new MethodController(server);

    server.get('/methods', {}, async (request, reply) => methodController.getAll(request, reply));
    server.post<{ Body: CreateMethodDto }>('/methods', {}, async (request, reply) => methodController.create(request, reply));
    server.get<{ Params: {id: string} }>('/methods/:id', {}, async (request, reply) => methodController.getById(request, reply));
    server.patch<{ Params: {id: string}, Body: CreateMethodDto }>('/methods/:id', {}, async (request, reply) => methodController.update(request, reply));
    server.delete<{ Params: {id: string} }>('/methods/:id', {}, async (request, reply) => methodController.delete(request, reply));
}