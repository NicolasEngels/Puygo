import { Request, Response } from 'express';
import Tag, { ITag } from './Tag';

const postNewTag = async (req: Request, res: Response, id_User: string) => {

    try{
        const duplicateTag: ITag[] = await Tag.find({ name: req.body.name, id_User: id_User }).exec();

        if (duplicateTag.length > 0) {
            res.send({
                error: true,
                "msg":"Impossible d'ajouter le tag. Un tag similaire existe déjà."
            });
            return;
        } else {
            const data = new Tag({
                name: req.body.name,
                id_User: id_User
            })

            await data.save();
            res.send({
                error: false,
                "msg" : "posted"
            })
        }
    }catch(error){
        console.log(error)
    }
}

export default postNewTag;