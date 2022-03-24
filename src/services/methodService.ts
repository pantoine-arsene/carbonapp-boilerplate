import { FastifyInstance } from "fastify";
import { CreateMethodDto, MethodDocument } from "../models/methodModel";
import { MethodManager } from "../managers/methodManager";

export class MethodService {

    private methodManager: MethodManager;

    constructor(server: FastifyInstance) {
        this.methodManager = new MethodManager(server);
    }

    public getAll = async (): Promise<Array<MethodDocument>> => {
        return (this.methodManager.getAll());
    }

    public create = async (createMethodDto: CreateMethodDto): Promise<MethodDocument> => {
        return (this.methodManager.create(createMethodDto));
    }

    public getById = async (id: string): Promise<MethodDocument | null> => {
        return (this.methodManager.getById(id));
    }

    public update = async (id: string, createMethodDto: CreateMethodDto): Promise<MethodDocument | null> => {
        return (this.methodManager.update(id, createMethodDto));
    }

    public delete = async (id: string): Promise<MethodDocument | null> => {
        return (this.methodManager.delete(id));
    }
}