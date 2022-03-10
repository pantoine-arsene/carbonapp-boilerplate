import { FastifyInstance } from "fastify";
import { BlogAttrs, BlogDocument } from "../models/blogModel";

export class BlogManager {

    private server: FastifyInstance;

    constructor(server: FastifyInstance) {
        this.server = server;
    }

    public getAll = async (): Promise<Array<BlogDocument>> => {
        const { Blog } = this.server.db.models;
        return (Blog.find({}));
    }

    public create = async (createBlogDto: BlogAttrs): Promise<BlogDocument> => {
        const { Blog } = this.server.db.models;
        return Blog.create(createBlogDto);
    }

    public getById = async (id: string): Promise<BlogDocument | null> => {
        const { Blog } = this.server.db.models;
        return (Blog.findById(id));
    }
}