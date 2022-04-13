import * as S from "sequelize-typescript"

export interface CreateTranslationDto {
    fr: string;
    en: string;
}

/**
 * Translation
 */
@S.Table
export default class Translation extends S.Model<Translation> {

    @S.PrimaryKey
    @S.AutoIncrement
    @S.Column(S.DataType.INTEGER)
    id: number;
 
    @S.AllowNull(false)
    @S.Column(S.DataType.STRING)
    fr: string;

    @S.Column(S.DataType.STRING)
    en: string;

    // ASSOCIATIONS

}
