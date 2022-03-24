import { CobenefitController } from "../controllers/cobenefitController";
import { FastifyInstance } from "fastify";
import { CreateCobenefitDto } from '../models/cobenefitModel';

export const CobenefitRoutes = async (server: FastifyInstance) => {

    const cobenefitController = new CobenefitController(server);

    server.get('/cobenefits', {}, async (request, reply) => cobenefitController.getAll(request, reply));
    server.post<{ Body: CreateCobenefitDto }>('/cobenefits', {}, async (request, reply) => cobenefitController.create(request, reply));
    server.get<{ Params: {id: string} }>('/cobenefits/:id', {}, async (request, reply) => cobenefitController.getById(request, reply));
    server.patch<{ Params: {id: string}, Body: CreateCobenefitDto }>('/cobenefits/:id', {}, async (request, reply) => cobenefitController.update(request, reply));
    server.delete<{ Params: {id: string} }>('/cobenefits/:id', {}, async (request, reply) => cobenefitController.delete(request, reply));
}