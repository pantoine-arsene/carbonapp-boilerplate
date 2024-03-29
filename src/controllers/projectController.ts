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
            return reply.code(500).send(error);
        }
    }

    public create = async (request, reply) => {
        try {
            return reply.code(201).send(await this.projectService.create(request.body));
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public getById = async (request, reply) => {
        try {
            const project = await this.projectService.getById(request.params.id);
            if (!project) {
                return reply.code(404).send("Project not found");
            }
            return reply.code(200).send(project);
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public update = async (request, reply) => {
        try {
            const project = await this.projectService.update(request.params.id, request.body);
            if (!project) {
                return reply.code(404).send("Project not found");
            }
            return reply.code(200).send(project);
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public delete = async (request, reply) => {
        try {
            const project = await this.projectService.delete(request.params.id);
            if (!project) {
                return reply.code(404).send("Project not found");
            }
            return reply.code(200).send(project);
        } catch (error) {
            request.log.error(error);
            return reply.error(500).send(error);
        }
    }
}