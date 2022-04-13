import * as S from "sequelize-typescript"
import Sector from './SectorModel';
import Translation from './TranslationModel';

export interface CreateMethodDto {
    name: string;
    image: string;
    standard: string;
    projectDuration: number;
    sector: Sector;
}

/**
 * Method
 */
@S.Table
@S.DefaultScope(() => ({include: [{model: Translation}]}))
export default class Method extends S.Model<Method> {

    @S.PrimaryKey
    @S.AutoIncrement
    @S.Column(S.DataType.INTEGER)
    id: number;
 
    @S.Column(S.DataType.STRING)
    image: string;

    @S.AllowNull(false)
    @S.Column(S.DataType.STRING)
    standard: string;

    @S.AllowNull(false)
    @S.Column(S.DataType.INTEGER)
    projectDuration: number;

    // ASSOCIATIONS

    @S.ForeignKey(() => Translation)
    @S.AllowNull(false)
    @S.Column(S.DataType.INTEGER)
    nameId: number;

    @S.BelongsTo(() => Translation)
    name: Translation;

    @S.ForeignKey(() => Sector)
    @S.AllowNull(false)
    @S.Column(S.DataType.INTEGER)
    sectorId: number;

    @S.BelongsTo(() => Sector)
    sector: Sector;
}
