import { ContactController } from "../controllers/contactController";
import { FastifyInstance } from "fastify";
import { CreateContactDto } from '../models/contactModel';

export const ContactRoutes = async (server: FastifyInstance) => {

    const contactController = new ContactController(server);

    server.get('/contacts', {}, async (request, reply) => contactController.getAll(request, reply));
    server.post<{ Body: CreateContactDto }>('/contacts', {}, async (request, reply) => contactController.create(request, reply));
    server.get<{ Params: {id: string} }>('/contacts/:id', {}, async (request, reply) => contactController.getById(request, reply));
    server.patch<{ Params: {id: string}, Body: CreateContactDto }>('/contacts/:id', {}, async (request, reply) => contactController.update(request, reply));
    server.delete<{ Params: {id: string} }>('/contacts/:id', {}, async (request, reply) => contactController.delete(request, reply));
}