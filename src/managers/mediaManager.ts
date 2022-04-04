import Media, { CreateMediaDto } from '../db/models/MediaModel';

export class MediaManager {

    public getAll = async (): Promise<Array<Media>> => {
        return (Media.findAll());
    }

    public create = async (createMediaDto: CreateMediaDto): Promise<Media> => {
        return (Media.create(createMediaDto));
    }

    public getById = async (id: number): Promise<Media | null> => {
        return (Media.findByPk(id));
    }

    public update = async (id: string, createMediaDto: CreateMediaDto): Promise<Media | null> => {
        const contact = await Media.findByPk(id);
        return contact.update(createMediaDto);
    }

    public delete = async (id: string): Promise<number> => {
        return Media.destroy({where: {id}});
    }
}