import { CreateContactDto } from 'db/models/ContactModel';
import Contact from 'db/models/ContactModel';
import { ContactManager } from "../managers/contactManager";

export class ContactService {

    private contactManager: ContactManager;

    constructor() {
        this.contactManager = new ContactManager();
    }

    public getAll = async (): Promise<Array<Contact>> => {
        return (this.contactManager.getAll());
    }

    public create = async (createContactDto: CreateContactDto): Promise<Contact> => {
        return (this.contactManager.create(createContactDto));
    }

    public getById = async (id: number): Promise<Contact | null> => {
        return (this.contactManager.getById(id));
    }

    public update = async (id: string, createContactDto: CreateContactDto): Promise<Contact | null> => {
        return (this.contactManager.update(id, createContactDto));
    }

    public delete = async (id: string): Promise<number> => {
        return (this.contactManager.delete(id));
    }
}