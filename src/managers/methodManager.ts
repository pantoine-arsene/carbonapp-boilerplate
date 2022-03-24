import { FastifyInstance } from "fastify";
import { CreateMethodDto, MethodDocument } from "../models/methodModel";

export class MethodManager {

    private server: FastifyInstance;

    constructor(server: FastifyInstance) {
        this.server = server;
    }

    public getAll = async (): Promise<Array<MethodDocument>> => {
        const { Method } = this.server.db.models;
        return (Method.find({}).populate('sector'));
    }

    public create = async (createMethodDto: CreateMethodDto): Promise<MethodDocument> => {
        const { Method } = this.server.db.models;
        return Method.create(createMethodDto);
    }

    public getById = async (id: string): Promise<MethodDocument | null> => {
        const { Method } = this.server.db.models;
        return (Method.findById(id).populate('sector'));
    }

    public update = async (id: string, createMethodDto: CreateMethodDto): Promise<MethodDocument | null> => {
        const { Method } = this.server.db.models;
        return Method.findOneAndUpdate({id}, createMethodDto);
    }

    public delete = async (id: string): Promise<MethodDocument | null> => {
        const { Method } = this.server.db.models;
        return Method.findByIdAndDelete(id);
    }
}