import * as S from "sequelize-typescript"
import Company from './CompanyModel';
import Project from './ProjectModel';

export interface CreateMediaDto {
    type: MediaType;
    url: string;
}

export enum MediaType {
    PHOTO = "photo",
    VIDEO = "video",
}

/**
 * Media
 */
@S.Table
export default class Media extends S.Model<Media> {

    @S.PrimaryKey
    @S.AutoIncrement
    @S.Column(S.DataType.INTEGER)
    id: number;

    @S.Column(S.DataType.STRING)
    type: MediaType;

    @S.Column(S.DataType.STRING)
    url: string;

    // ASSOCIATIONS

    @S.ForeignKey(() => Company)
    @S.Column(S.DataType.INTEGER)
    companyId: number;
  
    @S.BelongsTo(() => Company)
    company: Company;

    @S.ForeignKey(() => Project)
    @S.Column(S.DataType.INTEGER)
    projectId: number;
  
    @S.BelongsTo(() => Project)
    project: Project;
}
