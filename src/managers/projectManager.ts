import { FastifyInstance } from "fastify";
import { CreateProjectDto, ProjectDocument } from "../models/projectModel";

export class ProjectManager {

    private server: FastifyInstance;

    constructor(server: FastifyInstance) {
        this.server = server;
    }

    public getAll = async (): Promise<Array<ProjectDocument>> => {
        const { Project } = this.server.db.models;
        return (Project.find({})
            .populate('method')
            .populate('projectHolder')
            .populate('partner')
            .populate('intermediary')
            .populate('funder')
            .populate('dossier')
            .populate('cobenefits')
            .populate('mainMedia')
            .populate('medias')
        );
    }

    public create = async (createProjectDto: CreateProjectDto): Promise<ProjectDocument> => {
        const { Project } = this.server.db.models;
        return Project.create(createProjectDto);
    }

    public getById = async (id: string): Promise<ProjectDocument | null> => {
        const { Project } = this.server.db.models;
        return (Project.findById(id)
            .populate('method')
            .populate('projectHolder')
            .populate('partner')
            .populate('intermediary')
            .populate('funder')
            .populate('dossier')
            .populate('cobenefits')
            .populate('mainMedia')
            .populate('medias')
        );
    }

    public update = async (id: string, createProjectDto: CreateProjectDto): Promise<ProjectDocument | null> => {
        const { Project } = this.server.db.models;
        return Project.findByIdAndUpdate(id, createProjectDto);
    }

    public delete = async (id: string): Promise<ProjectDocument | null> => {
        const { Project } = this.server.db.models;
        return Project.findByIdAndDelete(id);
    }
}