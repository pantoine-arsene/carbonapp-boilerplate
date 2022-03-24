import { FastifyInstance } from "fastify";
import { CobenefitService } from "../services/cobenefitService";

export class CobenefitController {

    private cobenefitService: CobenefitService;

    constructor(server: FastifyInstance) {
        this.cobenefitService = new CobenefitService(server);
    }

    public getAll = async (request, reply) => {
        try {
            return reply.code(200).send(await this.cobenefitService.getAll());
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public create = async (request, reply) => {
        try {
            return reply.code(201).send(await this.cobenefitService.create(request.body));
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public getById = async (request, reply) => {
        try {
            const cobenefit = await this.cobenefitService.getById(request.params.id);
            if (!cobenefit) {
                return reply.code(404).send("Cobenefit not found");
            }
            return reply.code(200).send(cobenefit);
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public update = async (request, reply) => {
        try {
            const cobenefit = await this.cobenefitService.update(request.params.id, request.body);
            if (!cobenefit) {
                return reply.code(404).send("Cobenefit not found");
            }
            return reply.code(200).send(cobenefit);
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public delete = async (request, reply) => {
        try {
            const cobenefit = await this.cobenefitService.delete(request.params.id);
            if (!cobenefit) {
                return reply.code(404).send("Cobenefit not found");
            }
            return reply.code(200).send(cobenefit);
        } catch (error) {
            request.log.error(error);
            return reply.error(500).send(error);
        }
    }
}