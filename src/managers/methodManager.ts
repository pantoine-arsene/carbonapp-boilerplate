import Method from '../db/models/MethodModel';

export class MethodManager {

    public getAll = async (): Promise<Array<Method>> => {
        return (Method.findAll());
    }

    public create = async (createMethodDto): Promise<Method> => {
        return (Method.create(createMethodDto));
    }

    public getById = async (id: number): Promise<Method | null> => {
        return (Method.findByPk(id));
    }

    public update = async (id: string, createMethodDto): Promise<Method | null> => {
        const contact = await Method.findByPk(id);
        return contact.update(createMethodDto);
    }

    public delete = async (id: string): Promise<number> => {
        return Method.destroy({where: {id}});
    }
}