import { BlogController } from "../controllers/blogController";
import { FastifyInstance } from "fastify";
import { BlogAttrs } from '../models/blogModel';

export const BlogRoutes = async (server: FastifyInstance) => {

    const blogController = new BlogController(server);

    server.get('/blogs', {}, async (request, reply) => blogController.getAll(request, reply));
    server.post<{ Body: BlogAttrs }>('/blogs', {}, async (request, reply) => blogController.create(request, reply));
    server.get<{ Params: {id: string} }>('/blogs/:id', {}, async (request, reply) => blogController.getById(request, reply));

}

