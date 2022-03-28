import { Schema, model, Model } from 'mongoose';
import { CommonDocument } from './common';

export enum DossierType {
    INDIVIDUAL = "individual",
    COLLECTIVE = "collective"
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

export type DossierModel = Model<DossierDocument>

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