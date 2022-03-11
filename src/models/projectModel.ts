import { Schema, model, Model } from 'mongoose';
import { CommonDocument } from './common'

export interface ProjectAttrs {
    title: string;
    description: string;
    images: Array<string>;
}

export interface ProjectDocument extends CommonDocument, ProjectAttrs {}

export interface ProjectModel extends Model<ProjectDocument> {
    addOne(createProjectDto: ProjectAttrs): ProjectDocument;
}

export const projectSchema: Schema = new Schema(
    {
        title: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        images: [{
            type: String
        }]
    },
    {
        timestamps: true
    }
);

projectSchema.statics.addOne = (createProjectDto: ProjectAttrs) => {
    return Project.create(createProjectDto);
};

export const Project = model<ProjectDocument, ProjectModel>('Project', projectSchema);