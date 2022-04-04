import { FastifyInstance } from "fastify";
import { CreateCompanyDto, Company } from "../models/companyModel";

export class CompanyManager {

    private server: FastifyInstance;

    constructor(server: FastifyInstance) {
        this.server = server;
    }

    public getAll = async (): Promise<Array<Company>> => {
    }

    public create = async (createCompanyDto: CreateCompanyDto): Promise<Company> => {
    }

    public getById = async (id: string): Promise<Company | null> => {
    }

    public update = async (id: string, createCompanyDto: CreateCompanyDto): Promise<Company | null> => {
    }

    public delete = async (id: string): Promise<Company | null> => {
    }

}