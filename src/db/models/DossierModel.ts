import * as S from "sequelize-typescript"
import Company from './CompanyModel';

export enum DossierType {
    INDIVIDUAL = "individual",
    COLLECTIVE = "collective"
}

export enum DossierStatus {
    TO_NOTIFY = "to_notify",
    NOTIFIED = "notified",
    LABELLED = "labelled"
}

export interface CreateDossierDto {
    name: string;
    type: DossierType;
    depositDate: Date;
    validationDate: Date;
    status: DossierStatus;
}

/**
 * Dossier
 */
@S.Table
export default class Dossier extends S.Model<Dossier> {

    @S.PrimaryKey
    @S.AutoIncrement
    @S.Column(S.DataType.INTEGER)
    id: number;

    @S.AllowNull(false)
    @S.Column(S.DataType.STRING)
    name: string;

    @S.AllowNull(false)
    @S.Column(S.DataType.STRING)
    type: DossierType;

    @S.Column(S.DataType.DATE)
    depositDate: Date;

    @S.Column(S.DataType.DATE)
    validationDate: Date;

    @S.Column(S.DataType.STRING)
    status: DossierStatus;

    // ASSOCIATIONS

    @S.BelongsTo(() => Company)
    representative: Company;

    @S.ForeignKey(() => Company)
    @S.AllowNull(false)
    @S.Column(S.DataType.INTEGER)
    representativeId: number;
}
