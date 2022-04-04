import { FastifyInstance } from "fastify";
import { CreateSectorDto, SectorDocument } from "../models/sectorModel";

export class SectorManager {

    private server: FastifyInstance;

    constructor(server: FastifyInstance) {
        this.server = server;
    }

    public getAll = async (): Promise<Array<Sector>> => {
    }

    public create = async (createSectorDto: CreateSectorDto): Promise<Sector> => {
    }

    public getById = async (id: string): Promise<Sector | null> => {
    }

    public update = async (id: string, createSectorDto: CreateSectorDto): Promise<Sector | null> => {
    }

    public delete = async (id: string): Promise<Sector | null> => {
    }
}