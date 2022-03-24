import { FastifyInstance } from "fastify";
import { CreateCompanyDto, CompanyDocument } from "../models/companyModel";
import { CompanyManager } from "../managers/companyManager";

export class CompanyService {

    private companyManager: CompanyManager;

    constructor(server: FastifyInstance) {
        this.companyManager = new CompanyManager(server);
    }

    public getAll = async (): Promise<Array<CompanyDocument>> => {
        return (this.companyManager.getAll());
    }

    public create = async (createCompanyDto: CreateCompanyDto): Promise<CompanyDocument> => {
        return (this.companyManager.create(createCompanyDto));
    }

    public getById = async (id: string): Promise<CompanyDocument | null> => {
        return (this.companyManager.getById(id));
    }

    public update = async (id: string, createCompanyDto: CreateCompanyDto): Promise<CompanyDocument | null> => {
        return (this.companyManager.update(id, createCompanyDto));
    }

    public delete = async (id: string): Promise<CompanyDocument | null> => {
        return (this.companyManager.delete(id));
    }
}