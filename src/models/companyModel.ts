import { Schema, model, Model } from 'mongoose';
import { CommonDocument, Id } from './common'
import { ContactAttrs as Contact } from './contactModel';

export interface CreateCompanyDto {
    name: string;
    siren: string;
    address: string;
    zip: string;
    city: string;
    contact: Id;
}

export interface CompanyAttrs {
    name: string;
    siren: string;
    address: string;
    zip: string;
    city: string;
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