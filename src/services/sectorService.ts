import { FastifyInstance } from "fastify";
import { CreateSectorDto, SectorDocument } from "../models/sectorModel";
import { SectorManager } from "../managers/sectorManager";

export class SectorService {

    private sectorManager: SectorManager;

    constructor(server: FastifyInstance) {
        this.sectorManager = new SectorManager(server);
    }

    public getAll = async (): Promise<Array<SectorDocument>> => {
        return (this.sectorManager.getAll());
    }

    public create = async (createSectorDto: CreateSectorDto): Promise<SectorDocument> => {
        return (this.sectorManager.create(createSectorDto));
    }

    public getById = async (id: string): Promise<SectorDocument | null> => {
        return (this.sectorManager.getById(id));
    }

    public update = async (id: string, createSectorDto: CreateSectorDto): Promise<SectorDocument | null> => {
        return (this.sectorManager.update(id, createSectorDto));
    }

    public delete = async (id: string): Promise<SectorDocument | null> => {
        return (this.sectorManager.delete(id));
    }
}