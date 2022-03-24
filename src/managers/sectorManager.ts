import { FastifyInstance } from "fastify";
import { CreateSectorDto, SectorDocument } from "../models/sectorModel";

export class SectorManager {

    private server: FastifyInstance;

    constructor(server: FastifyInstance) {
        this.server = server;
    }

    public getAll = async (): Promise<Array<SectorDocument>> => {
        const { Sector } = this.server.db.models;
        return (Sector.find({}));
    }

    public create = async (createSectorDto: CreateSectorDto): Promise<SectorDocument> => {
        const { Sector } = this.server.db.models;
        return Sector.create(createSectorDto);
    }

    public getById = async (id: string): Promise<SectorDocument | null> => {
        const { Sector } = this.server.db.models;
        return (Sector.findById(id));
    }

    public update = async (id: string, createSectorDto: CreateSectorDto): Promise<SectorDocument | null> => {
        const { Sector } = this.server.db.models;
        return Sector.findOneAndUpdate({id}, createSectorDto);
    }

    public delete = async (id: string): Promise<SectorDocument | null> => {
        const { Sector } = this.server.db.models;
        return Sector.findByIdAndDelete(id);
    }
}