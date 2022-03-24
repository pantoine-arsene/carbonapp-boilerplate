import { FastifyInstance } from "fastify";
import { SectorService } from "../services/sectorService";

export class SectorController {

    private sectorService: SectorService;

    constructor(server: FastifyInstance) {
        this.sectorService = new SectorService(server);
    }

    public getAll = async (request, reply) => {
        try {
            return reply.code(200).send(await this.sectorService.getAll());
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public create = async (request, reply) => {
        try {
            return reply.code(201).send(await this.sectorService.create(request.body));
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public getById = async (request, reply) => {
        try {
            const sector = await this.sectorService.getById(request.params.id);
            if (!sector) {
                return reply.code(404).send("Sector not found");
            }
            return reply.code(200).send(sector);
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public update = async (request, reply) => {
        try {
            const sector = await this.sectorService.update(request.params.id, request.body);
            if (!sector) {
                return reply.code(404).send("Sector not found");
            }
            return reply.code(200).send(sector);
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public delete = async (request, reply) => {
        try {
            const sector = await this.sectorService.delete(request.params.id);
            if (!sector) {
                return reply.code(404).send("Sector not found");
            }
            return reply.code(200).send(sector);
        } catch (error) {
            request.log.error(error);
            return reply.error(500).send(error);
        }
    }
}