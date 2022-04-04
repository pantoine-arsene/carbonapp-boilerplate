import { FastifyInstance } from "fastify";
import { CreateProjectDto, ProjectDocument } from "../models/projectModel";

export class ProjectManager {

    private server: FastifyInstance;

    constructor(server: FastifyInstance) {
        this.server = server;
    }

    public getAll = async (): Promise<Array<Project>> => {
    }

    public create = async (createProjectDto: CreateProjectDto): Promise<Project> => {
    }

    public getById = async (id: string): Promise<Project | null> => {
    }

    public update = async (id: string, createProjectDto: CreateProjectDto): Promise<Project | null> => {
    }

    public delete = async (id: string): Promise<Project | null> => {
    }
}