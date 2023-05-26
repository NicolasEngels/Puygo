import { Schema, Document, model } from 'mongoose';
import { ITag, tagSchema } from './Tag';

// Interface représentant le schéma d'un post
export interface IPost extends Document {
    happinessIndex: number;
    activities: ITag[];
    date: Date,
    description: string;
    id_User: string;
}
// Schéma du post
const postSchema = new Schema<IPost>({
    happinessIndex: { type: Number, required: true },
    activities: { type: [tagSchema], required: false },
    date: { type: Date, required: true },
    description: { type: String, required: false },
    id_User: { type: String, required: false },
});

// Modèle de post
const Post = model<IPost>('Post', postSchema);

export default Post