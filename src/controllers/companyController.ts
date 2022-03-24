import { FastifyInstance } from "fastify";
import { CompanyService } from "../services/companyService";

export class CompanyController {

    private companyService: CompanyService;

    constructor(server: FastifyInstance) {
        this.companyService = new CompanyService(server);
    }

    public getAll = async (request, reply) => {
        try {
            return reply.code(200).send(await this.companyService.getAll());
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public create = async (request, reply) => {
        try {
            return reply.code(201).send(await this.companyService.create(request.body));
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public getById = async (request, reply) => {
        try {
            const company = await this.companyService.getById(request.params.id);
            if (!company) {
                return reply.code(404).send("Company not found");
            }
            return reply.code(200).send(company);
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public update = async (request, reply) => {
        try {
            const company = await this.companyService.update(request.params.id, request.body);
            if (!company) {
                return reply.code(404).send("Company not found");
            }
            return reply.code(200).send(company);
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public delete = async (request, reply) => {
        try {
            const company = await this.companyService.delete(request.params.id);
            if (!company) {
                return reply.code(404).send("Company not found");
            }
            return reply.code(200).send(company);
        } catch (error) {
            request.log.error(error);
            return reply.error(500).send(error);
        }
    }
}