import Sector, { CreateSectorDto } from '../db/models/SectorModel';

export class SectorManager {

    public getAll = async (): Promise<Array<Sector>> => {
        return (Sector.findAll());
    }

    public create = async (createSectorDto: CreateSectorDto): Promise<Sector> => {
        return (Sector.create(createSectorDto));
    }

    public getById = async (id: number): Promise<Sector | null> => {
        return (Sector.findByPk(id));
    }

    public update = async (id: string, createSectorDto: CreateSectorDto): Promise<Sector | null> => {
        const contact = await Sector.findByPk(id);
        return contact.update(createSectorDto);
    }

    public delete = async (id: string): Promise<number> => {
        return Sector.destroy({where: {id}});
    }
}