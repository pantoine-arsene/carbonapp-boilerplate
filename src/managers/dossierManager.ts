import { FastifyInstance } from "fastify";
import { CreateDossierDto, Dossier } from "../models/dossierModel";

export class DossierManager {

    private server: FastifyInstance;

    constructor(server: FastifyInstance) {
        this.server = server;
    }

    public getAll = async (): Promise<Array<Dossier>> => {
    }

    public create = async (createDossierDto: CreateDossierDto): Promise<Dossier> => {
    }

    public getById = async (id: string): Promise<Dossier | null> => {
    }

    public update = async (id: string, createDossierDto: CreateDossierDto): Promise<Dossier | null> => {
    }

    public delete = async (id: string): Promise<Dossier | null> => {
    }
}