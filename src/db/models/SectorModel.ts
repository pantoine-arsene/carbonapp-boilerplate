import * as S from "sequelize-typescript"
import Method from './MethodModel';
import Request from './RequestModel';

export interface CreateSectorDto {
    image: string;
    title: string;
    description: string;
}

/**
 * Sector
 */
@S.Table
export default class Sector extends S.Model<Sector> {

    @S.PrimaryKey
    @S.AutoIncrement
    @S.Column(S.DataType.INTEGER)
    id: number

    @S.AllowNull(false)
    @S.Column(S.DataType.STRING)
    image: string;

    @S.AllowNull(false)
    @S.Column(S.DataType.STRING)
    title: string;

    @S.Length({max: 200})
    @S.AllowNull(false)
    @S.Column(S.DataType.STRING)
    description: string;

    @S.HasMany(() => Method)
    methods: Method[];

    @S.HasMany(() => Request)
    requests: Request[];
}
