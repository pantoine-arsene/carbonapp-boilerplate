import { FastifyInstance } from "fastify";
import { BlogAttrs, BlogDocument } from "../models/blogModel";
import { BlogManager } from "../managers/blogManager";

export class BlogService {

    private blogManager: BlogManager;

    constructor(server: FastifyInstance) {
        this.blogManager = new BlogManager(server);
    }

    public getAll = async (): Promise<Array<BlogDocument>> => {
        return (this.blogManager.getAll());
    }

    public create = async (createBlogDto: BlogAttrs): Promise<BlogDocument> => {
        return (this.blogManager.create(createBlogDto));
    }

    public getById = async (id: string): Promise<BlogDocument | null> => {
        return (this.blogManager.getById(id));
    }
}