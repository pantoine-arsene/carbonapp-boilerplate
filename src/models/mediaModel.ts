import { Schema, model, Model } from 'mongoose';
import { CommonDocument } from './common'

export enum MediaType {
    PHOTO = "photo",
    VIDEO = "video",
}

export interface CreateMediaDto {
    type: string;
    url: string;
}

export interface MediaAttrs {
    type: string;
    url: string;
}

export interface MediaDocument extends CommonDocument, MediaAttrs {}

export type MediaModel = Model<MediaDocument>

export const mediaSchema: Schema = new Schema(
    {
        type: {
            type: String,
            enum: MediaType,
        },
        url: {
            type: String,
        },
    },
    {
        timestamps: true
    }
);

export const Media = model<MediaDocument, MediaModel>('Media', mediaSchema);