import Project from '../db/models/ProjectModel';

export class ProjectManager {

    public getAll = async (): Promise<Array<Project>> => {
        return (Project.findAll());
    }

    public create = async (createProjectDto): Promise<Project> => {
        return (Project.create(createProjectDto));
    }

    public getById = async (id: number): Promise<Project | null> => {
        return (Project.findByPk(id));
    }

    public update = async (id: string, createProjectDto): Promise<Project | null> => {
        const contact = await Project.findByPk(id);
        return contact.update(createProjectDto);
    }

    public delete = async (id: string): Promise<number> => {
        return Project.destroy({where: {id}});
    }
}