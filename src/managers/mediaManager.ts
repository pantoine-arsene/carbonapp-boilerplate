import { FastifyInstance } from "fastify";
import { CreateMediaDto, Media } from "../models/mediaModel";

export class MediaManager {

    private server: FastifyInstance;

    constructor(server: FastifyInstance) {
        this.server = server;
    }

    public getAll = async (): Promise<Array<Media>> => {
    }

    public create = async (createMediaDto: CreateMediaDto): Promise<Media> => {
    }

    public getById = async (id: string): Promise<Media | null> => {
    }

    public update = async (id: string, createMediaDto: CreateMediaDto): Promise<Media | null> => {
    }

    public delete = async (id: string): Promise<Media | null> => {
    }
}