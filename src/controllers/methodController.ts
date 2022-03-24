import { FastifyInstance } from "fastify";
import { MethodService } from "../services/methodService";

export class MethodController {

    private methodService: MethodService;

    constructor(server: FastifyInstance) {
        this.methodService = new MethodService(server);
    }

    public getAll = async (request, reply) => {
        try {
            return reply.code(200).send(await this.methodService.getAll());
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public create = async (request, reply) => {
        try {
            return reply.code(201).send(await this.methodService.create(request.body));
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public getById = async (request, reply) => {
        try {
            const method = await this.methodService.getById(request.params.id);
            if (!method) {
                return reply.code(404).send("Method not found");
            }
            return reply.code(200).send(method);
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public update = async (request, reply) => {
        try {
            const method = await this.methodService.update(request.params.id, request.body);
            if (!method) {
                return reply.code(404).send("Method not found");
            }
            return reply.code(200).send(method);
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public delete = async (request, reply) => {
        try {
            const method = await this.methodService.delete(request.params.id);
            if (!method) {
                return reply.code(404).send("Method not found");
            }
            return reply.code(200).send(method);
        } catch (error) {
            request.log.error(error);
            return reply.error(500).send(error);
        }
    }
}