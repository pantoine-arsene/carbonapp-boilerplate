import { FastifyInstance } from "fastify";
import { CreateMethodDto, Method } from "../models/methodModel";

export class MethodManager {

    private server: FastifyInstance;

    constructor(server: FastifyInstance) {
        this.server = server;
    }

    public getAll = async (): Promise<Array<Method>> => {
    }

    public create = async (createMethodDto: CreateMethodDto): Promise<Method> => {
    }

    public getById = async (id: string): Promise<Method | null> => {
    }

    public update = async (id: string, createMethodDto: CreateMethodDto): Promise<Method | null> => {
    }

    public delete = async (id: string): Promise<Method | null> => {
    }
}