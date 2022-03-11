import { FastifyInstance } from "fastify";
import { ProjectService } from "../services/projectService";

export class ProjectController {

    private projectService: ProjectService;

    constructor(server: FastifyInstance) {
        this.projectService = new ProjectService(server);
    }

    public getAll = async (request, reply) => {
        try {
            return reply.code(200).send(await this.projectService.getAll());
        } catch (error) {
            request.log.error(error);
            return reply.send(500);
        }
    }

    public create = async (request, reply) => {
        try {
            return reply.code(201).send(await this.projectService.create(request.body));
        } catch (error) {
            request.log.error(error);
            return reply.send(500);
        }
    }

    public getById = async (request, reply) => {
        try {
            const project = await this.projectService.getById(request.params.id);
            if (!project) {
                return reply.send(404);
            }
            return reply.code(200).send(project);
        } catch (error) {
            request.log.error(error);
            return reply.send(400);
        }
    }
}