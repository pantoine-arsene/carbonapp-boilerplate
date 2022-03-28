import { Schema, model, Model } from 'mongoose';
import { CommonDocument } from './common'

export interface CreateContactDto {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;    
}

export interface ContactAttrs {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
}

export interface ContactDocument extends CommonDocument, ContactAttrs {}

export type ContactModel = Model<ContactDocument>

export const contactSchema: Schema = new Schema(
    {
        firstname: {
            type: String,
        },
        lastname: {
            type: String,
        },
        email: {
            type: String,
        },
        phone: {
            type: String,
        },
    },
    {
        timestamps: true
    }
);

export const Contact = model<ContactDocument, ContactModel>('Contact', contactSchema);