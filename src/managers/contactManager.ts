import { FastifyInstance } from "fastify";
import { CreateContactDto, ContactDocument } from "../models/contactModel";

export class ContactManager {

    private server: FastifyInstance;

    constructor(server: FastifyInstance) {
        this.server = server;
    }

    public getAll = async (): Promise<Array<ContactDocument>> => {
        const { Contact } = this.server.db.models;
        return (Contact.find({}));
    }

    public create = async (createContactDto: CreateContactDto): Promise<ContactDocument> => {
        const { Contact } = this.server.db.models;
        return Contact.create(createContactDto);
    }

    public getById = async (id: string): Promise<ContactDocument | null> => {
        const { Contact } = this.server.db.models;
        return (Contact.findById(id));
    }

    public update = async (id: string, createContactDto: CreateContactDto): Promise<ContactDocument | null> => {
        const { Contact } = this.server.db.models;
        return Contact.findOneAndUpdate({id}, createContactDto);
    }

    public delete = async (id: string): Promise<ContactDocument | null> => {
        const { Contact } = this.server.db.models;
        return Contact.findByIdAndDelete(id);
    }

}