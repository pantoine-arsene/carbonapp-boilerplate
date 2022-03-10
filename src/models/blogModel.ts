import { Schema, model, Model } from 'mongoose';
import { CommonDocument } from './common'

export interface BlogAttrs {
    title: string;
    content: string;
    category: string;
}

export interface BlogDocument extends CommonDocument, BlogAttrs {}

export interface BlogModel extends Model<BlogDocument> {
    addOne(createBlogDto: BlogAttrs): BlogDocument;
}

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

blogSchema.statics.addOne = (createBlogDto: BlogAttrs) => {
    return Blog.create(createBlogDto);
};

export const Blog = model<BlogDocument, BlogModel>('Blog', blogSchema);