import { Schema, model } from 'mongoose';
import { CommonDocument } from './common'

export interface BlogAttrs {
    title: string;
    content: string;
    category: string;
}

export interface BlogDocument extends CommonDocument, BlogAttrs {}

export const blogSchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        content: {
            type: String,
            required: true
        },
        category: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

export const Blog = model<BlogDocument>('Blog', blogSchema);