import { Request, Response } from 'express';
import Post from './Post';

const postNewPost = async (req: Request, res: Response, id_User: string) => {

    try {
        const data = new Post({
            happinessIndex: req.body.happinessIndex,
            activities: req.body.activities,
            date: req.body.date,
            description: req.body.description,
            id_User: id_User
        })

        await data.save()

        res.send({
            error: false,
            "msg": "posted"
        })
    } catch (error) {
        console.log(error)
    }
}

export default postNewPost;