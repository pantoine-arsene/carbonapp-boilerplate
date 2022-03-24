import { FastifyInstance } from "fastify";
import { CreateContactDto, ContactDocument } from "../models/contactModel";
import { ContactManager } from "../managers/contactManager";

export class ContactService {

    private contactManager: ContactManager;

    constructor(server: FastifyInstance) {
        this.contactManager = new ContactManager(server);
    }

    public getAll = async (): Promise<Array<ContactDocument>> => {
        return (this.contactManager.getAll());
    }

    public create = async (createContactDto: CreateContactDto): Promise<ContactDocument> => {
        return (this.contactManager.create(createContactDto));
    }

    public getById = async (id: string): Promise<ContactDocument | null> => {
        return (this.contactManager.getById(id));
    }

    public update = async (id: string, createContactDto: CreateContactDto): Promise<ContactDocument | null> => {
        return (this.contactManager.update(id, createContactDto));
    }

    public delete = async (id: string): Promise<ContactDocument | null> => {
        return (this.contactManager.delete(id));
    }
}