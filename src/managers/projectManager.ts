import { FastifyInstance } from "fastify";
import { ProjectAttrs, ProjectDocument } from "../models/projectModel";

export class ProjectManager {

    private server: FastifyInstance;

    constructor(server: FastifyInstance) {
        this.server = server;
    }

    public getAll = async (): Promise<Array<ProjectDocument>> => {
        const { Project } = this.server.db.models;
        return (Project.find({}));
    }

    public create = async (createProjectDto: ProjectAttrs): Promise<ProjectDocument> => {
        const { Project } = this.server.db.models;
        return Project.addOne(createProjectDto);
    }

    public getById = async (id: string): Promise<ProjectDocument | null> => {
        const { Project } = this.server.db.models;
        return (Project.findById(id));
    }
}