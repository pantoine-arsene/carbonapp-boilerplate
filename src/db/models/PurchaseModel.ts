import * as S from "sequelize-typescript"
import Company from './CompanyModel';
import Project from './ProjectModel';

export interface CreatePurchaseDto {
    image: string;
    title: string;
    description: string;
}

/**
 * Purchase
 */
@S.Table
export default class Purchase extends S.Model<Purchase> {

    @S.PrimaryKey
    @S.AutoIncrement
    @S.Column(S.DataType.INTEGER)
    id: number;

    @S.BelongsTo(() => Company)
    funder: Company;

    @S.ForeignKey(() => Company)
    @S.AllowNull(false)
    @S.Column(S.DataType.INTEGER)
    funderId: number;

    @S.BelongsTo(() => Company)
    intermediary: Company;

    @S.ForeignKey(() => Company)
    @S.AllowNull(false)
    @S.Column(S.DataType.INTEGER)
    intermediaryId: number;

    @S.AllowNull(false)
    @S.Column(S.DataType.INTEGER)
    tonnage: number;

    @S.AllowNull(false)
    @S.Column(S.DataType.INTEGER)
    price: number;


    @S.BelongsTo(() => Project)
    project: Project;

    @S.ForeignKey(() => Project)
    @S.AllowNull(false)
    @S.Column(S.DataType.INTEGER)
    projectId: number;

}
