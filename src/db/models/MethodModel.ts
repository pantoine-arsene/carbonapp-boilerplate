import * as S from "sequelize-typescript"
import Sector from './SectorModel';

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
export default class Method extends S.Model<Method> {

    @S.PrimaryKey
    @S.AutoIncrement
    @S.Column(S.DataType.INTEGER)
    id: number

    @S.AllowNull(false)
    @S.Column(S.DataType.STRING)
    name: string;
 
    @S.Column(S.DataType.STRING)
    image: string;

    @S.AllowNull(false)
    @S.Column(S.DataType.STRING)
    standard: string;

    @S.AllowNull(false)
    @S.Column(S.DataType.INTEGER)
    projectDuration: number;

    // ASSOCIATIONS

    @S.ForeignKey(() => Sector)
    @S.AllowNull(false)
    @S.Column(S.DataType.INTEGER)
    sectorId: number;

    @S.BelongsTo(() => Sector)
    sector: Sector;
}
