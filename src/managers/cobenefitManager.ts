import { FastifyInstance } from "fastify";
import { CreateCobenefitDto, CobenefitDocument } from "../models/cobenefitModel";

export class CobenefitManager {

    private server: FastifyInstance;

    constructor(server: FastifyInstance) {
        this.server = server;
    }

    public getAll = async (): Promise<Array<CobenefitDocument>> => {
        const { Cobenefit } = this.server.db.models;
        return (Cobenefit.find({}));
    }

    public create = async (createCobenefitDto: CreateCobenefitDto): Promise<CobenefitDocument> => {
        const { Cobenefit } = this.server.db.models;
        return Cobenefit.create(createCobenefitDto);
    }

    public getById = async (id: string): Promise<CobenefitDocument | null> => {
        const { Cobenefit } = this.server.db.models;
        return (Cobenefit.findById(id));
    }

    public update = async (id: string, createCobenefitDto: CreateCobenefitDto): Promise<CobenefitDocument | null> => {
        const { Cobenefit } = this.server.db.models;
        return Cobenefit.findOneAndUpdate({id}, createCobenefitDto);
    }

    public delete = async (id: string): Promise<CobenefitDocument | null> => {
        const { Cobenefit } = this.server.db.models;
        return Cobenefit.findByIdAndDelete(id);
    }

}