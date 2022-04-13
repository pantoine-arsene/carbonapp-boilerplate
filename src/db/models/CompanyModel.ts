import * as S from "sequelize-typescript"
import Contact from './ContactModel';
import Dossier from './DossierModel';
import Media from './MediaModel';
import Translation from './TranslationModel';

export interface CreateCompanyDto {
    image: string;
    description: string;
}

/**
 * Company
 */
@S.Table
@S.DefaultScope(() => ({include: [{model: Translation}]}))
export default class Company extends S.Model<Company> {

    @S.PrimaryKey
    @S.AutoIncrement
    @S.Column(S.DataType.INTEGER)
    id: number;

    @S.AllowNull(false)
    @S.Column(S.DataType.STRING)
    name: string;

    @S.Column(S.DataType.STRING)
    banner: string;

    @S.Column(S.DataType.STRING)
    logo: string;

    @S.Length({max: 9})
    @S.Column(S.DataType.STRING)
    siren: string;

    @S.Column(S.DataType.STRING)
    address: string;

    @S.Column(S.DataType.STRING)
    zip: string;

    @S.Column(S.DataType.STRING)
    city: string;

    @S.Column(S.DataType.STRING)
    country: string;

    @S.Column(S.DataType.BOOLEAN)
    display: boolean;

    // ASSOCIATIONS

    @S.ForeignKey(() => Translation)
    @S.AllowNull(false)
    @S.Column(S.DataType.INTEGER)
    descriptionId: number;

    @S.BelongsTo(() => Translation)
    description: Translation;

    @S.HasMany(() => Media)
    medias: Media[];

    @S.ForeignKey(() => Contact)
    @S.AllowNull(false)
    @S.Column(S.DataType.INTEGER)
    contactId: number;

    @S.BelongsTo(() => Contact)
    contact: Contact;

    @S.HasMany(() => Dossier)
    dossiers: Dossier[];

    // VIRTUALS

    @S.Column({
        type: S.DataType.VIRTUAL,
        get(this: Company) {
            return (this.contact?.email);
        }
    })
    companyMail: string;

}
