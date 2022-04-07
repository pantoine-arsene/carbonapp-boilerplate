import * as S from "sequelize-typescript"
import Cobenefit from '../CobenefitModel';
import Project from '../ProjectModel';

export interface CreateProjectCobenefitDto {
    image: string;
    title: string;
    description: string;
}

/**
 * ProjectCobenefit
 * Project-Cobenefit joint table
 */
@S.Table
export default class ProjectCobenefit extends S.Model<ProjectCobenefit> {

    @S.PrimaryKey
    @S.AutoIncrement
    @S.Column(S.DataType.INTEGER)
    id: number;

    @S.ForeignKey(() => Project)
    @S.AllowNull(false)
    @S.Column(S.DataType.INTEGER)
    projectId: number
  
    @S.ForeignKey(() => Cobenefit)
    @S.AllowNull(false)
    @S.Column(S.DataType.INTEGER)
    cobenefitId: number
}
