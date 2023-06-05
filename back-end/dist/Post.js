"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const Tag_1 = require("./Tag");
// Schéma du post
const postSchema = new mongoose_1.Schema({
    happinessIndex: { type: Number, required: true },
    activities: { type: [Tag_1.tagSchema], required: false },
    date: { type: Date, required: true },
    description: { type: String, required: false },
    id_User: { type: String, required: false },
});
// Modèle de post
const Post = (0, mongoose_1.model)('Post', postSchema);
exports.default = Post;
