import { FastifyInstance } from "fastify";
import { CreateCompanyDto, CompanyDocument } from "../models/companyModel";

export class CompanyManager {

    private server: FastifyInstance;

    constructor(server: FastifyInstance) {
        this.server = server;
    }

    public getAll = async (): Promise<Array<CompanyDocument>> => {
        const { Company } = this.server.db.models;
        return (Company.find({}).populate('contact'));
    }

    public create = async (createCompanyDto: CreateCompanyDto): Promise<CompanyDocument> => {
        const { Company } = this.server.db.models;
        return Company.create(createCompanyDto);
    }

    public getById = async (id: string): Promise<CompanyDocument | null> => {
        const { Company } = this.server.db.models;
        return (Company.findById(id).populate('contact'));
    }

    public update = async (id: string, createCompanyDto: CreateCompanyDto): Promise<CompanyDocument | null> => {
        const { Company } = this.server.db.models;
        return Company.findOneAndUpdate({id}, createCompanyDto);
    }

    public delete = async (id: string): Promise<CompanyDocument | null> => {
        const { Company } = this.server.db.models;
        return Company.findByIdAndDelete(id);
    }

}