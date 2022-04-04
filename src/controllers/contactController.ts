import { ContactService } from "../services/contactService";

export class ContactController {

    private contactService: ContactService;

    constructor() {
        this.contactService = new ContactService();
    }

    public getAll = async (request, reply) => {
        try {
            return reply.code(200).send(await this.contactService.getAll());
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public create = async (request, reply) => {
        try {
            return reply.code(201).send(await this.contactService.create(request.body));
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public getById = async (request, reply) => {
        try {
            const contact = await this.contactService.getById(request.params.id);
            if (!contact) {
                return reply.code(404).send("Contact not found");
            }
            return reply.code(200).send(contact);
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public update = async (request, reply) => {
        try {
            const contact = await this.contactService.update(request.params.id, request.body);
            if (!contact) {
                return reply.code(404).send("Contact not found");
            }
            return reply.code(200).send(contact);
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public delete = async (request, reply) => {
        try {
            const contact = await this.contactService.delete(request.params.id);
            if (!contact) {
                return reply.code(404).send("Contact not found");
            }
            return reply.code(200).send(contact);
        } catch (error) {
            request.log.error(error);
            return reply.error(500).send(error);
        }
    }
}