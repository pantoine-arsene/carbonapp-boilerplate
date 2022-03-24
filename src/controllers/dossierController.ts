import { FastifyInstance } from "fastify";
import { DossierService } from "../services/dossierService";

export class DossierController {

    private dossierService: DossierService;

    constructor(server: FastifyInstance) {
        this.dossierService = new DossierService(server);
    }

    public getAll = async (request, reply) => {
        try {
            return reply.code(200).send(await this.dossierService.getAll());
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public create = async (request, reply) => {
        try {
            return reply.code(201).send(await this.dossierService.create(request.body));
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public getById = async (request, reply) => {
        try {
            const dossier = await this.dossierService.getById(request.params.id);
            if (!dossier) {
                return reply.code(404).send("Dossier not found");
            }
            return reply.code(200).send(dossier);
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public update = async (request, reply) => {
        try {
            const dossier = await this.dossierService.update(request.params.id, request.body);
            if (!dossier) {
                return reply.code(404).send("Dossier not found");
            }
            return reply.code(200).send(dossier);
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public delete = async (request, reply) => {
        try {
            const dossier = await this.dossierService.delete(request.params.id);
            if (!dossier) {
                return reply.code(404).send("Dossier not found");
            }
            return reply.code(200).send(dossier);
        } catch (error) {
            request.log.error(error);
            return reply.error(500).send(error);
        }
    }
}