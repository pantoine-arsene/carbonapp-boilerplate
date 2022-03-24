import { Schema, model, Model } from 'mongoose';
import { CommonDocument, lang, Lang } from './common'
import { SectorAttrs as Sector } from './sectorModel';

export enum DossierType {
    INDIVIDUAL = "individual",
    COLLECTIVE = "collectif"
}

export enum DossierStatus {
    TO_NOTIFY = "to_notify",
    NOTIFIED = "notified",
    LABELLED = "labelled"
}

export interface CreateDossierDto {
    name: string;
    type: DossierType;
    depositDate: Date;
    validationDate: Date;
    status: DossierStatus;
}

export interface DossierAttrs {
    name: string;
    type: DossierType;
    depositDate: Date;
    validationDate: Date;
    status: DossierStatus;
}

export interface DossierDocument extends CommonDocument, DossierAttrs {}

export interface DossierModel extends Model<DossierDocument> {}

export const dossierSchema: Schema = new Schema(
    {
        name: {
            type: String,
            intl: true,
            required: true,
        },
        type: {
            type: String,
            enum: DossierType,
            required: true,
        },
        depositDate: {
            type: Date,
        },
        validationDate: {
            type: Date,
        },
        status: {
            type: String,
            enum: DossierStatus,
        },
    },
    {
        timestamps: true
    }
);

export const Dossier = model<DossierDocument, DossierModel>('Dossier', dossierSchema);