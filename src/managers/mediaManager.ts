import { FastifyInstance } from "fastify";
import { CreateMediaDto, MediaDocument } from "../models/mediaModel";

export class MediaManager {

    private server: FastifyInstance;

    constructor(server: FastifyInstance) {
        this.server = server;
    }

    public getAll = async (): Promise<Array<MediaDocument>> => {
        const { Media } = this.server.db.models;
        return (Media.find({}));
    }

    public create = async (createMediaDto: CreateMediaDto): Promise<MediaDocument> => {
        const { Media } = this.server.db.models;
        return Media.create(createMediaDto);
    }

    public getById = async (id: string): Promise<MediaDocument | null> => {
        const { Media } = this.server.db.models;
        return (Media.findById(id));
    }

    public update = async (id: string, createMediaDto: CreateMediaDto): Promise<MediaDocument | null> => {
        const { Media } = this.server.db.models;
        return Media.findOneAndUpdate({id}, createMediaDto);
    }

    public delete = async (id: string): Promise<MediaDocument | null> => {
        const { Media } = this.server.db.models;
        return Media.findByIdAndDelete(id);
    }
}