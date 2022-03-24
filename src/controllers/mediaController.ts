import { FastifyInstance } from "fastify";
import { MediaService } from "../services/mediaService";

export class MediaController {

    private mediaService: MediaService;

    constructor(server: FastifyInstance) {
        this.mediaService = new MediaService(server);
    }

    public getAll = async (request, reply) => {
        try {
            return reply.code(200).send(await this.mediaService.getAll());
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public create = async (request, reply) => {
        try {
            return reply.code(201).send(await this.mediaService.create(request.body));
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public getById = async (request, reply) => {
        try {
            const media = await this.mediaService.getById(request.params.id);
            if (!media) {
                return reply.code(404).send("Media not found");
            }
            return reply.code(200).send(media);
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public update = async (request, reply) => {
        try {
            const media = await this.mediaService.update(request.params.id, request.body);
            if (!media) {
                return reply.code(404).send("Media not found");
            }
            return reply.code(200).send(media);
        } catch (error) {
            request.log.error(error);
            return reply.code(500).send(error);
        }
    }

    public delete = async (request, reply) => {
        try {
            const media = await this.mediaService.delete(request.params.id);
            if (!media) {
                return reply.code(404).send("Media not found");
            }
            return reply.code(200).send(media);
        } catch (error) {
            request.log.error(error);
            return reply.error(500).send(error);
        }
    }
}