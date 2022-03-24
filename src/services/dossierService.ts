import { FastifyInstance } from "fastify";
import { CreateDossierDto, DossierDocument } from "../models/dossierModel";
import { DossierManager } from "../managers/dossierManager";

export class DossierService {

    private dossierManager: DossierManager;

    constructor(server: FastifyInstance) {
        this.dossierManager = new DossierManager(server);
    }

    public getAll = async (): Promise<Array<DossierDocument>> => {
        return (this.dossierManager.getAll());
    }

    public create = async (createDossierDto: CreateDossierDto): Promise<DossierDocument> => {
        return (this.dossierManager.create(createDossierDto));
    }

    public getById = async (id: string): Promise<DossierDocument | null> => {
        return (this.dossierManager.getById(id));
    }

    public update = async (id: string, createDossierDto: CreateDossierDto): Promise<DossierDocument | null> => {
        return (this.dossierManager.update(id, createDossierDto));
    }

    public delete = async (id: string): Promise<DossierDocument | null> => {
        return (this.dossierManager.delete(id));
    }
}