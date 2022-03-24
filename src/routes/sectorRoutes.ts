import { SectorController } from "../controllers/sectorController";
import { FastifyInstance } from "fastify";
import { CreateSectorDto } from '../models/sectorModel';

export const SectorRoutes = async (server: FastifyInstance) => {

    const sectorController = new SectorController(server);

    server.get('/sectors', {}, async (request, reply) => sectorController.getAll(request, reply));
    server.post<{ Body: CreateSectorDto }>('/sectors', {}, async (request, reply) => sectorController.create(request, reply));
    server.get<{ Params: {id: string} }>('/sectors/:id', {}, async (request, reply) => sectorController.getById(request, reply));
    server.patch<{ Params: {id: string}, Body: CreateSectorDto }>('/sectors/:id', {}, async (request, reply) => sectorController.update(request, reply));
    server.delete<{ Params: {id: string} }>('/sectors/:id', {}, async (request, reply) => sectorController.delete(request, reply));
}