import { Schema, Document, model } from 'mongoose';

// Interface représentant le schéma d'un tag
export interface ITag extends Document {
    name: string;
    id_User: string;
}

// Schéma du tag
export const tagSchema = new Schema<ITag>({
    name: { type: String, required: true },
    id_User: { type: String, required: true },
});

// Modèle de tag
const Tag = model<ITag>('Tag', tagSchema);

export default Tag