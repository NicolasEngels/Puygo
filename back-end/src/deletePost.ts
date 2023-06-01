import { Request, Response } from 'express';
import Post, { IPost } from './Post';

const deletePostById = async (req: Request, res: Response, id_Post: string) => {

    try {
        const postToDelete = await Post.findOneAndDelete({ _id: id_Post }).exec();
        res.send(`${postToDelete} is deleted`)
    } catch (error) {
        console.error('Erreur lors de la récupération des Posts:', error);
        res.status(500).json({ message: 'Erreur lors de la récupération du post' });
    }
    
}

export default deletePostById;