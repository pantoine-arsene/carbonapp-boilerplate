import { Document } from 'mongoose'

export interface CommonDocument extends Document {
    createdAt: string;
    updatedAt: string;
}

export type Id = string;

export var Lang = {
    type: {
        en: String,
        fr: String,
    }
}

export interface lang {
    en: string,
    fr: string
}