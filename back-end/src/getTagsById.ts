import { Request, Response } from 'express';
import Tag, { ITag } from './Tag';

const getTagsById = async (req: Request, res: Response, id_User: string) => {
    try {
        const tags: ITag[] = await Tag.find({ id_User: id_User }).exec();
        res.json(tags);
    } catch (error) {
        console.error('Erreur lors de la récupération des tags:', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des tags' });
    }
}

export default getTagsById;