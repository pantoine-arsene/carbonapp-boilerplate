import { Schema, model, Model } from 'mongoose';
import { CommonDocument, Id } from './common'
import { SectorAttrs as Sector } from './sectorModel';

export interface CreateMethodDto {
    name: string;
    image: string;
    standard: string;
    projectDuration: number;
    sector: Id;
}

export interface MethodAttrs {
    name: string;
    image: string;
    standard: string;
    projectDuration: number;
    sector: Sector;
}

export interface MethodDocument extends CommonDocument, MethodAttrs {}

export type MethodModel = Model<MethodDocument>

export const methodSchema: Schema = new Schema(
    {
        name: {
            type: String,
            intl: true,
            required: true,
        },
        image: {
            type: String,
            required: true,
        },
        standard: {
            type: String,
            required: true,
        },
        projectDuration: {
            type: Number,
            required: true,
        },
        sector: { 
            type: Schema.Types.ObjectId, 
            ref: 'Sector',
            required: true,
        },
    },
    {
        timestamps: true
    }
);

export const Method = model<MethodDocument, MethodModel>('Method', methodSchema);