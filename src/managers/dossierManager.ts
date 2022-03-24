import { FastifyInstance } from "fastify";
import { CreateDossierDto, DossierDocument } from "../models/dossierModel";

export class DossierManager {

    private server: FastifyInstance;

    constructor(server: FastifyInstance) {
        this.server = server;
    }

    public getAll = async (): Promise<Array<DossierDocument>> => {
        const { Dossier } = this.server.db.models;
        return (Dossier.find({}));
    }

    public create = async (createDossierDto: CreateDossierDto): Promise<DossierDocument> => {
        const { Dossier } = this.server.db.models;
        return Dossier.create(createDossierDto);
    }

    public getById = async (id: string): Promise<DossierDocument | null> => {
        const { Dossier } = this.server.db.models;
        return (Dossier.findById(id));
    }

    public update = async (id: string, createDossierDto: CreateDossierDto): Promise<DossierDocument | null> => {
        const { Dossier } = this.server.db.models;
        return Dossier.findOneAndUpdate({id}, createDossierDto);
    }

    public delete = async (id: string): Promise<DossierDocument | null> => {
        const { Dossier } = this.server.db.models;
        return Dossier.findByIdAndDelete(id);
    }
}