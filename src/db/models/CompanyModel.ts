import * as S from "sequelize-typescript"
import Media from './MediaModel';

export interface CreateCompanyDto {
    image: string;
    description: string;
}

/**
 * Company
 */
@S.Table
export default class Company extends S.Model<Company> {

    @S.PrimaryKey
    @S.AutoIncrement
    @S.Column(S.DataType.INTEGER)
    id: number

    @S.AllowNull(false)
    @S.Column(S.DataType.STRING)
    name: string;

    @S.AllowNull(false)
    @S.Length({max: 300})
    @S.Column(S.DataType.STRING)
    description: string;

    @S.Column(S.DataType.STRING)
    banner: string;

    @S.Column(S.DataType.STRING)
    logo: string;

    @S.HasMany(() => Media)
    medias: Media[];

    @S.Column(S.DataType.STRING)
    siren: string;

    
}
