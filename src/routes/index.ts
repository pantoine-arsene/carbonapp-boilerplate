import { 
  FastifyInstance, 
  FastifyPluginAsync 
} from 'fastify';
import fp from 'fastify-plugin';
import { Db } from '../db';
import { BlogAttrs } from '../models/blogModel';

// Declaration merging
declare module 'fastify' {
    export interface FastifyInstance {
        db: Db;
    }
}

interface blogParams {
    id: string;
}

const BlogRoute: FastifyPluginAsync = async (server: FastifyInstance) => {

  server.get('/', {}, async (request, reply) => {
    try {
        return reply.code(200).send({hello: "world"});
    } catch (error) {
        request.log.error(error);
        return reply.send(500);
    }
  });

    server.get('/blogs', {}, async (request, reply) => {
        try {
            const { Blog } = server.db.models;
            const blogs = await Blog.find({});
            return reply.code(200).send(blogs);
        } catch (error) {
            request.log.error(error);
            return reply.send(500);
        }
    });

    server.post<{ Body: BlogAttrs }>('/blogs', {}, async (request, reply) => {
        try {
            const { Blog } = server.db.models;
            const blog = await Blog.addOne(request.body);
            await blog.save();
            return reply.code(201).send(blog);
        } catch (error) {
            request.log.error(error);
            return reply.send(500);
        }
    });
 
    server.get<{ Params: blogParams }>('/blogs/:id', {}, async (request, reply) => {
        try {
            const ID = request.params.id;
            const { Blog } = server.db.models;
            const blog = await Blog.findById(ID);
            if (!blog) {
                return reply.send(404);
            }
            return reply.code(200).send(blog);
        } catch (error) {
            request.log.error(error);
            return reply.send(400);
        }
    });
};
export default fp(BlogRoute);