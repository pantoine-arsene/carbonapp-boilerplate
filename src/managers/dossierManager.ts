import Dossier, { CreateDossierDto } from '../db/models/DossierModel';

export class DossierManager {

    public getAll = async (): Promise<Array<Dossier>> => {
        return (Dossier.findAll());
    }

    public create = async (createDossierDto: CreateDossierDto): Promise<Dossier> => {
        return (Dossier.create(createDossierDto));
    }

    public getById = async (id: number): Promise<Dossier | null> => {
        return (Dossier.findByPk(id));
    }

    public update = async (id: string, createDossierDto: CreateDossierDto): Promise<Dossier | null> => {
        const contact = await Dossier.findByPk(id);
        return contact.update(createDossierDto);
    }

    public delete = async (id: string): Promise<number> => {
        return Dossier.destroy({where: {id}});
    }
}