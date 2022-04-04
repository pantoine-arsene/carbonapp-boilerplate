import Cobenefit, { CreateCobenefitDto } from "../db/models/CobenefitModel";

export class CobenefitManager {

    public getAll = async (): Promise<Array<Cobenefit>> => {
        return (Cobenefit.findAll());
    }

    public create = async (createCobenefitDto: CreateCobenefitDto): Promise<Cobenefit> => {
        return (Cobenefit.create(createCobenefitDto));
    }

    public getById = async (id: number): Promise<Cobenefit | null> => {
        return (Cobenefit.findByPk(id));
    }

    public update = async (id: string, createCobenefitDto: CreateCobenefitDto): Promise<Cobenefit | null> => {
        const contact = await Cobenefit.findByPk(id);
        return contact.update(createCobenefitDto);
    }

    public delete = async (id: string): Promise<number> => {
        return Cobenefit.destroy({where: {id}});
    }

}