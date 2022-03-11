import { FastifyInstance } from "fastify";
import { ProjectAttrs, ProjectDocument } from "../models/projectModel";
import { ProjectManager } from "../managers/projectManager";

export class ProjectService {

    private projectManager: ProjectManager;

    constructor(server: FastifyInstance) {
        this.projectManager = new ProjectManager(server);
    }

    public getAll = async (): Promise<Array<ProjectDocument>> => {
        return (this.projectManager.getAll());
    }

    public create = async (createProjectDto: ProjectAttrs): Promise<ProjectDocument> => {
        return (this.projectManager.create(createProjectDto));
    }

    public getById = async (id: string): Promise<ProjectDocument | null> => {
        return (this.projectManager.getById(id));
    }
}