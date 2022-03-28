import { Schema, model, Model } from 'mongoose';
import { CommonDocument } from './common'

export interface CreateSectorDto {
    image: string;
    title: string;
    description: string;
}

export interface SectorAttrs {
    image: string;
    title: string;
    description: string;
}

export interface SectorDocument extends CommonDocument, SectorAttrs {}

export type SectorModel = Model<SectorDocument>

export const sectorSchema: Schema = new Schema(
    {
        image: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
            maxlength: 200,
        },
    },
    {
        timestamps: true
    }
);

export const Sector = model<SectorDocument, SectorModel>('Sector', sectorSchema);