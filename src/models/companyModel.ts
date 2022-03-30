import { Schema, model, Model } from 'mongoose';
import { CommonDocument, Id } from './common'
import { ContactAttrs as Contact } from './contactModel';
import { MediaAttrs as Media } from './mediaModel';

export interface CreateCompanyDto {
    name: string;
    description: string;
    banner: string;
    logo: string;
    medias: Array<Media>;
    siren: string;
    address: string;
    zip: string;
    city: string;
    country: string;
    contact: Id;
}

export interface CompanyAttrs {
    name: string;
    description: string;
    banner: string;
    logo: string;
    medias: Array<Media>;
    siren: string;
    address: string;
    zip: string;
    city: string;
    country: string;
    contact: Contact;
}

export interface CompanyDocument extends CommonDocument, CompanyAttrs {}

export type CompanyModel = Model<CompanyDocument>

export const companySchema: Schema = new Schema(
    {
        name: {
            type: String,
            required: true,
        },
        description: {
            type: String,
            required: true,
            maxlength: 300,
            intl: true,
        },
        banner: {
            type: String,
        },
        logo: {
            type: String,
        },
        medias: [{ 
            type: Schema.Types.ObjectId, 
            ref: 'Media'
        }],
        siren: {
            type: String,
            maxlength: 9,
        },
        address: {
            type: String,
        },
        zip: {
            type: String,
        },
        city: {
            type: String,
        },
        country: {
            type: String,
        },
        contact: { 
            type: Schema.Types.ObjectId, 
            ref: 'Contact'
        },
        visible: {
            type: Boolean,
        }
    },
    {
        timestamps: true
    }
);

export const Company = model<CompanyDocument, CompanyModel>('Company', companySchema);