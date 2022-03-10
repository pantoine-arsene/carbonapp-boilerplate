import { FastifyInstance } from "fastify";
import { BlogService } from "../services/blogService";

export class BlogController {

    private blogService: BlogService;

    constructor(server: FastifyInstance) {
        this.blogService = new BlogService(server);
    }

    public getAll = async (request, reply) => {
        try {
            return reply.code(200).send(await this.blogService.getAll());
        } catch (error) {
            request.log.error(error);
            return reply.send(500);
        }
    }

    public create = async (request, reply) => {
        try {
            return reply.code(201).send(await this.blogService.create(request.body));
        } catch (error) {
            request.log.error(error);
            return reply.send(500);
        }
    }

    public getById = async (request, reply) => {
        try {
            const blog = await this.blogService.getById(request.params.id);
            if (!blog) {
                return reply.send(404);
            }
            return reply.code(200).send(blog);
        } catch (error) {
            request.log.error(error);
            return reply.send(400);
        }
    }
}