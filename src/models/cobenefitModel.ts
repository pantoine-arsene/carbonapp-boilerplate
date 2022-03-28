import { Schema, model, Model } from 'mongoose';
import { CommonDocument } from './common'

export interface CreateCobenefitDto {
    image: string;
    title: string;
    description: string;
}

export interface CobenefitAttrs {
    image: string;
    title: string;
    description: string;
}

export interface CobenefitDocument extends CommonDocument, CobenefitAttrs {}

export type CobenefitModel = Model<CobenefitDocument>

export const cobenefitSchema: Schema = new Schema(
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

export const Cobenefit = model<CobenefitDocument, CobenefitModel>('Cobenefit', cobenefitSchema);