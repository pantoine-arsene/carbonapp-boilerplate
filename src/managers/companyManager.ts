import Contact from '../db/models/ContactModel';
import Company, { CreateCompanyDto } from '../db/models/CompanyModel';

export class CompanyManager {

    public getAll = async (): Promise<Array<Company>> => {
        return (Company.findAll({include: {model: Contact, required: true}}));
    }

    public create = async (createCompanyDto: CreateCompanyDto): Promise<Company> => {
        return (Company.create(createCompanyDto));
    }

    public getById = async (id: number): Promise<Company | null> => {
        return (Company.findByPk(id));
    }

    public update = async (id: string, createCompanyDto: CreateCompanyDto): Promise<Company | null> => {
        const contact = await Company.findByPk(id);
        return contact.update(createCompanyDto);
    }

    public delete = async (id: string): Promise<number> => {
        return Company.destroy({where: {id}});
    }

}