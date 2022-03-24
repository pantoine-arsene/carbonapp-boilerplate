import { MediaController } from "../controllers/mediaController";
import { FastifyInstance } from "fastify";
import { CreateMediaDto } from '../models/mediaModel';

export const MediaRoutes = async (server: FastifyInstance) => {

    const mediaController = new MediaController(server);

    server.get('/medias', {}, async (request, reply) => mediaController.getAll(request, reply));
    server.post<{ Body: CreateMediaDto }>('/medias', {}, async (request, reply) => mediaController.create(request, reply));
    server.get<{ Params: {id: string} }>('/medias/:id', {}, async (request, reply) => mediaController.getById(request, reply));
    server.patch<{ Params: {id: string}, Body: CreateMediaDto }>('/medias/:id', {}, async (request, reply) => mediaController.update(request, reply));
    server.delete<{ Params: {id: string} }>('/medias/:id', {}, async (request, reply) => mediaController.delete(request, reply));
}