import { FastifyInstance } from "fastify";
import { CreateMediaDto, MediaDocument } from "../models/mediaModel";
import { MediaManager } from "../managers/mediaManager";

export class MediaService {

    private mediaManager: MediaManager;

    constructor(server: FastifyInstance) {
        this.mediaManager = new MediaManager(server);
    }

    public getAll = async (): Promise<Array<MediaDocument>> => {
        return (this.mediaManager.getAll());
    }

    public create = async (createMediaDto: CreateMediaDto): Promise<MediaDocument> => {
        return (this.mediaManager.create(createMediaDto));
    }

    public getById = async (id: string): Promise<MediaDocument | null> => {
        return (this.mediaManager.getById(id));
    }

    public update = async (id: string, createMediaDto: CreateMediaDto): Promise<MediaDocument | null> => {
        return (this.mediaManager.update(id, createMediaDto));
    }

    public delete = async (id: string): Promise<MediaDocument | null> => {
        return (this.mediaManager.delete(id));
    }
}