import * as S from "sequelize-typescript"
import Method from './MethodModel';
import Request from './RequestModel';
import Translation, { CreateTranslationDto } from './TranslationModel';

export interface CreateSectorDto {
    image: string;
    title: CreateTranslationDto;
    description: CreateTranslationDto;
}

/**
 * Sector
 */
@S.Table
@S.DefaultScope(() => ({include: [{model: Translation, as: "title"}, {model: Translation, as: "description"}]}))
export default class Sector extends S.Model<Sector> {

    @S.PrimaryKey
    @S.AutoIncrement
    @S.Column(S.DataType.INTEGER)
    id: number;

    @S.AllowNull(false)
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

    @S.HasMany(() => Method)
    methods: Method[];

    @S.HasMany(() => Request)
    requests: Request[];

}
