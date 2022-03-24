import { FastifyInstance } from "fastify";
import { CreateCobenefitDto, CobenefitDocument } from "../models/cobenefitModel";
import { CobenefitManager } from "../managers/cobenefitManager";

export class CobenefitService {

    private cobenefitManager: CobenefitManager;

    constructor(server: FastifyInstance) {
        this.cobenefitManager = new CobenefitManager(server);
    }

    public getAll = async (): Promise<Array<CobenefitDocument>> => {
        return (this.cobenefitManager.getAll());
    }

    public create = async (createCobenefitDto: CreateCobenefitDto): Promise<CobenefitDocument> => {
        return (this.cobenefitManager.create(createCobenefitDto));
    }

    public getById = async (id: string): Promise<CobenefitDocument | null> => {
        return (this.cobenefitManager.getById(id));
    }

    public update = async (id: string, createCobenefitDto: CreateCobenefitDto): Promise<CobenefitDocument | null> => {
        return (this.cobenefitManager.update(id, createCobenefitDto));
    }

    public delete = async (id: string): Promise<CobenefitDocument | null> => {
        return (this.cobenefitManager.delete(id));
    }
}