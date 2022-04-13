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

    @S.AllowNull(false)
    @S.Column(S.DataType.INTEGER)
    tonnage: number;

    @S.AllowNull(false)
    @S.Column(S.DataType.INTEGER)
    pricePerTon: number;

    @S.AllowNull(false)
    @S.Column(S.DataType.INTEGER)
    intIncome: number;

    // ASSOCIATIONS

    @S.BelongsTo(() => Company, 'funderId')
    funder: Company;

    @S.ForeignKey(() => Company)
    @S.AllowNull(false)
    @S.Column(S.DataType.INTEGER)
    funderId: number;

    @S.BelongsTo(() => Company, 'intermediaryId')
    intermediary: Company;

    @S.ForeignKey(() => Company)
    @S.AllowNull(false)
    @S.Column(S.DataType.INTEGER)
    intermediaryId: number;

    @S.ForeignKey(() => Project)
    @S.AllowNull(false)
    @S.Column(S.DataType.INTEGER)
    projectId: number;

    @S.BelongsTo(() => Project)
    project: Project;

    // VIRTUALS

    @S.Column({
        type: S.DataType.VIRTUAL,
        get(this: Purchase) {
            return (this.pricePerTon * this.tonnage);
        }
    })
    price: number;

    @S.Column({
        type: S.DataType.VIRTUAL,
        get(this: Purchase) {
            return (this.price - this.intIncome);/* - prix du projet ramené au tonnage du contrat - partenaire */
        }
    })
    carbonappIncome: number;

}
