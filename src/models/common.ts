import { Document } from 'mongoose'

export interface CommonDocument extends Document {
    createdAt: string;
    updatedAt: string;
}

export type Id = string;

export const Lang = {
    type: {
        en: String,
        fr: String,
    }
}

export interface lang {
    en: string,
    fr: string
}