import * as S from "sequelize-typescript"
import ProjectCobenefit from './jointTables/ProjectCobenefitsModel';
import Project from './ProjectModel';

export interface CreateCobenefitDto {
    image: string;
    title: string;
    description: string;
}

/**
 * Cobenefit
 */
@S.Table
export default class Cobenefit extends S.Model<Cobenefit> {

    @S.PrimaryKey
    @S.AutoIncrement
    @S.Column(S.DataType.INTEGER)
    id: number;

    @S.AllowNull(false)
    @S.Column(S.DataType.STRING)
    title: string;

    @S.AllowNull(false)
    @S.Length({max: 200})
    @S.Column(S.DataType.STRING)
    description: string;

    @S.Column(S.DataType.STRING)
    image: string;

    // ASSOCIATIONS

    @S.BelongsToMany(() => Project, () => ProjectCobenefit)
    projects: Project[];

}
