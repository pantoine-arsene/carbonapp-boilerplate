import { DossierController } from "../controllers/dossierController";
import { FastifyInstance } from "fastify";
import { CreateDossierDto } from '../models/dossierModel';

export const DossierRoutes = async (server: FastifyInstance) => {

    const dossierController = new DossierController(server);

    server.get('/dossiers', {}, async (request, reply) => dossierController.getAll(request, reply));
    server.post<{ Body: CreateDossierDto }>('/dossiers', {}, async (request, reply) => dossierController.create(request, reply));
    server.get<{ Params: {id: string} }>('/dossiers/:id', {}, async (request, reply) => dossierController.getById(request, reply));
    server.patch<{ Params: {id: string}, Body: CreateDossierDto }>('/dossiers/:id', {}, async (request, reply) => dossierController.update(request, reply));
    server.delete<{ Params: {id: string} }>('/dossiers/:id', {}, async (request, reply) => dossierController.delete(request, reply));
}