import * as S from "sequelize-typescript"

export interface CreateProjectDto {
    name: string;
}

/**
 * Project
 */
@S.Table
export default class Project extends S.Model<Project> {

    @S.PrimaryKey
    @S.AutoIncrement
    @S.Column(S.DataType.INTEGER)
    id: number

    @S.Column(S.DataType.STRING)
    name: string
}
