import { Document } from 'mongoose'

export interface CommonDocument extends Document {
    createdAt: string;
    updatedAt: string;
}