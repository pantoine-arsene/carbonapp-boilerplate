import Contact, { CreateContactDto } from '../db/models/ContactModel';

export class ContactManager {

    public getAll = async (): Promise<Array<Contact>> => {
        return (Contact.findAll());
    }

    public create = async (createContactDto: CreateContactDto): Promise<Contact> => {
        return (Contact.create(createContactDto));
    }

    public getById = async (id: number): Promise<Contact | null> => {
        return (Contact.findByPk(id));
    }

    public update = async (id: string, createContactDto: CreateContactDto): Promise<Contact | null> => {
        const contact = await Contact.findByPk(id);
        return contact.update(createContactDto);
    }

    public delete = async (id: string): Promise<number> => {
        return Contact.destroy({where: {id}});
    }

}