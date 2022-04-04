import { FastifyInstance } from "fastify";
import { CreateCobenefitDto, Cobenefit } from "../models/cobenefitModel";

export class CobenefitManager {

    private server: FastifyInstance;

    constructor(server: FastifyInstance) {
        this.server = server;
    }

    public getAll = async (): Promise<Array<Cobenefit>> => {
    }

    public create = async (createCobenefitDto: CreateCobenefitDto): Promise<Cobenefit> => {
    }

    public getById = async (id: string): Promise<Cobenefit | null> => {
    }

    public update = async (id: string, createCobenefitDto: CreateCobenefitDto): Promise<Cobenefit | null> => {
    }

    public delete = async (id: string): Promise<Cobenefit | null> => {
    }

}