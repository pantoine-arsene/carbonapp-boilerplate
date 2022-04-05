import * as S from "sequelize-typescript"
import Cobenefit from './CobenefitModel';
import Company from './CompanyModel';
import Dossier from './DossierModel';
import Media from './MediaModel';
import Method from './MethodModel';
import ProjectCobenefit from './ProjectCobenefitsModel';
import Purchase from './PurchaseModel';

export enum ProjectStatus {
    TO_FUND = "to_fund",
    PARTIALLY_FUNDED = "partially_funded",
    FUNDED = "funded"
}

export interface CreateProjectDto {
    name: string;
}

/**
 * Project
 */
@S.Table
export default class Project extends S.Model<Project> {

    @S.PrimaryKey
    @S.AutoIncrement
    @S.Column(S.DataType.INTEGER)
    id: number;

    @S.AllowNull(false)
    @S.Column(S.DataType.STRING)
    name: string;

    @S.AllowNull(false)
    @S.Column(S.DataType.STRING)
    shortDescription: string;

    @S.AllowNull(false)
    @S.Column(S.DataType.STRING)
    longDescription: string;

    @S.BelongsTo(() => Method)
    method: Method;

    @S.ForeignKey(() => Method)
    @S.AllowNull(false)
    @S.Column(S.DataType.INTEGER)
    methodId: number;

    @S.Column(S.DataType.STRING)
    country: string;

    @S.Column(S.DataType.STRING)
    city: string;

    @S.Column(S.DataType.STRING)
    zip: string;

    @S.Column(S.DataType.STRING)
    address: string;

    @S.Column(S.DataType.INTEGER)
    totalTonnage: number;

    @S.BelongsTo(() => Company)
    projectHolder: Company;

    @S.ForeignKey(() => Company)
    @S.AllowNull(false)
    @S.Column(S.DataType.INTEGER)
    projectHolderId: number;

    @S.BelongsTo(() => Company)
    partner: Company;

    @S.ForeignKey(() => Company)
    @S.Column(S.DataType.INTEGER)
    partnerId: number;

    @S.HasMany(() => Purchase)
    purchases: Purchase[];

    @S.BelongsTo(() => Dossier)
    dossier: Dossier;

    @S.ForeignKey(() => Dossier)
    @S.AllowNull(false)
    @S.Column(S.DataType.INTEGER)
    dossierId: number;

    @S.AllowNull(false)
    @S.Column(S.DataType.STRING)
    status: string;

    @S.BelongsToMany(() => Cobenefit, () => ProjectCobenefit)
    cobenefits: Cobenefit[];

    @S.HasOne(() => Media)
    mainMedia: Media;

    @S.HasMany(() => Media)
    medias: Media[];

    @S.Column(S.DataType.STRING)
    banner: string;

}
