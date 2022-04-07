import * as S from "sequelize-typescript"
import Contact from './ContactModel';
import Dossier from './DossierModel';
import Media from './MediaModel';

export interface CreateCompanyDto {
    image: string;
    description: string;
}

/**
 * Company
 */
@S.Table
//@S.DefaultScope(() => ({include: [Contact, Media]}))
export default class Company extends S.Model<Company> {

    @S.PrimaryKey
    @S.AutoIncrement
    @S.Column(S.DataType.INTEGER)
    id: number;

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

    @S.HasMany(() => Media)
    medias: Media[];

    @S.BelongsTo(() => Contact)
    contact: Contact;

    @S.ForeignKey(() => Contact)
    @S.AllowNull(false)
    @S.Column(S.DataType.INTEGER)
    contactId: number;
    
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
