import * as S from "sequelize-typescript"
import Company from './CompanyModel';

export interface CreateContactDto {
    firstname: string;
    lastname: string;
    email: string;
    phone: string;
}

/**
 * Contact
 */
@S.Table
export default class Contact extends S.Model<Contact> {

    @S.PrimaryKey
    @S.AutoIncrement
    @S.Column(S.DataType.INTEGER)
    id: number;

    @S.Column(S.DataType.STRING)
    firstname: string;

    @S.Column(S.DataType.STRING)
    lastname: string;

    @S.Unique(true)
    @S.Column(S.DataType.STRING)
    email: string;

    @S.Column(S.DataType.STRING)
    phone: string;

    // ASSOCIATIONS

    @S.HasOne(() => Company)
    company: Company;
}
