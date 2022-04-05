import * as S from "sequelize-typescript"
import Sector from './SectorModel';

export interface CreateRequestDto {
    image: string;
    title: string;
    description: string;
}

/**
 * Request
 */
@S.Table
export default class Request extends S.Model<Request> {

    @S.PrimaryKey
    @S.AutoIncrement
    @S.Column(S.DataType.INTEGER)
    id: number;

    @S.AllowNull(false)
    @S.Column(S.DataType.STRING)
    location: string;

    @S.AllowNull(false)
    @S.Column(S.DataType.INTEGER)
    carbonAmount: number;

    @S.BelongsTo(() => Sector)
    sector: Sector;

    @S.ForeignKey(() => Sector)
    sectorId: number;
}
