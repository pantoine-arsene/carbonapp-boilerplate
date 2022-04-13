import * as S from "sequelize-typescript"
import ProjectCobenefit from './jointTables/ProjectCobenefitsModel';
import Project from './ProjectModel';
import Translation from './TranslationModel';

export interface CreateCobenefitDto {
    image: string;
    title: string;
    description: string;
}

/**
 * Cobenefit
 */
@S.Table
@S.DefaultScope(() => ({include: [{model: Translation, as: "title"}, {model: Translation, as: "description"}]}))
export default class Cobenefit extends S.Model<Cobenefit> {

    @S.PrimaryKey
    @S.AutoIncrement
    @S.Column(S.DataType.INTEGER)
    id: number;

    @S.Column(S.DataType.STRING)
    image: string;

    // ASSOCIATIONS

    @S.BelongsTo(() => Translation, "titleId")
    title: Translation;

    @S.ForeignKey(() => Translation)
    @S.AllowNull(false)
    @S.Column(S.DataType.INTEGER)
    titleId: number;

    @S.BelongsTo(() => Translation, "descriptionId")
    description: Translation;

    @S.ForeignKey(() => Translation)
    @S.AllowNull(false)
    @S.Column(S.DataType.INTEGER)
    descriptionId: number;

    @S.BelongsToMany(() => Project, () => ProjectCobenefit)
    projects: Project[];

}
