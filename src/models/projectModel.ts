import { Schema, model, Model } from 'mongoose';
import { CobenefitAttrs } from './cobenefitModel';
import { CommonDocument, Id } from './common'
import { CompanyAttrs } from './companyModel';
import { DossierAttrs } from './dossierModel';
import { MediaAttrs } from './mediaModel';
import { MethodAttrs } from './methodModel';

export enum ProjectStatus {
    TO_FUND = "to_fund",
    PARTIALLY_FUNDED = "partially_funded",
    FUNDED = "funded"
}

export interface CreateProjectDto {
    name: string;
    shortDescription: string;
    longDescription: string;
    method: Id;
    location: string;
    tonnage: number;
    netbackPrice: number;
    projectHolder: Id;
    partner: Id;
    intermediary: Id;
    funder: Id;
    dossier: Id;
    status: ProjectStatus;
    cobenefits: Array<Id>;
    mainMedia: Id;
    medias: Array<Id>;
    banner: string;
}

export interface ProjectAttrs {
    name: string;
    shortDescription: string;
    longDescription: string;
    method: MethodAttrs;
    location: string;
    tonnage: number;
    netbackPrice: number;
    projectHolder: CompanyAttrs;
    partner: CompanyAttrs;
    intermediary: CompanyAttrs;
    funder: CompanyAttrs;
    dossier: DossierAttrs;
    status: ProjectStatus;
    cobenefits: Array<CobenefitAttrs>;
    mainMedia: MediaAttrs;
    medias: Array<MediaAttrs>;
    banner: string;
}

export interface ProjectDocument extends CommonDocument, ProjectAttrs {}

export interface ProjectModel extends Model<ProjectDocument> {
    budget(): number;
}

export const projectSchema: Schema = new Schema(
    {
        name: {
            type: String,
            maxlength: 100,
            required: true,
            intl: true
        },
        shortDescription: {
            type: String,
            maxlength: 300,
            required: true,
            intl: true
        },
        longDescription: {
            type: String,
            required: true,
            intl: true
        },
        method: { 
            type: Schema.Types.ObjectId, 
            ref: 'Method',
            required: true,
        },
        location: {
            type: String,
            required: true,
        },
        tonnage: {
            type: Number,
        },
        netbackPrice: {
            type: Number,
        },
        projectHolder: { 
            type: Schema.Types.ObjectId, 
            ref: 'Company',
            required: true,
        },
        partner: {
            type: Schema.Types.ObjectId, 
            ref: 'Company',
        },
        intermediary: {
            type: Schema.Types.ObjectId, 
            ref: 'Company',
        },
        funder: { 
            type: Schema.Types.ObjectId, 
            ref: 'Company',
        },
        dossier: { 
            type: Schema.Types.ObjectId, 
            ref: 'Dossier',
            required: true,
        },
        status: {
            type: String,
            enum: ProjectStatus,
            required: true,
        },
        cobenefits: [{ 
            type: Schema.Types.ObjectId, 
            ref: 'Cobenefit',
        }],
        mainMedia: { 
            type: Schema.Types.ObjectId, 
            ref: 'Media',
        },
        medias: [{ 
            type: Schema.Types.ObjectId, 
            ref: 'Media',
        }],
        banner: { 
            type: String, 
        },
    },
    {
        timestamps: true
    }
);

projectSchema.virtual('budget').get(function() {
    return this.tonnage * this.netbackPrice;
});

export const Project = model<ProjectDocument, ProjectModel>('Project', projectSchema);