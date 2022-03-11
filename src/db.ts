import { FastifyInstance } from 'fastify';
import { FastifyPluginAsync, FastifyPluginOptions } from 'fastify';
import fp from 'fastify-plugin';
import { Project, ProjectModel } from './models/projectModel';
import mongoose from 'mongoose';
import { Blog, BlogModel } from './models/blogModel';

export interface Models {
    Blog: BlogModel;
    Project: ProjectModel;
}
export interface Db {
    models: Models;
}

// define options
export interface MyPluginOptions {
    uri: string;
}
const ConnectDB: FastifyPluginAsync<MyPluginOptions> = async (
    fastify: FastifyInstance,
    options: FastifyPluginOptions
) => {
    try {
        mongoose.connection.on('connected', () => {
            fastify.log.info({ actor: 'MongoDB' }, 'connected');
        });
        mongoose.connection.on('disconnected', () => {
            fastify.log.error({ actor: 'MongoDB' }, 'disconnected');
        });
        await mongoose.connect(options.uri);
        const models: Models = { Blog, Project };
        fastify.decorate('db', { models });
    } catch (error) {
        console.error(error);
    }
};
export default fp(ConnectDB);