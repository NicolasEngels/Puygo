"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.tagSchema = void 0;
const mongoose_1 = require("mongoose");
// Schéma du tag
exports.tagSchema = new mongoose_1.Schema({
    name: { type: String, required: true },
    id_User: { type: String, required: true },
});
// Modèle de tag
const Tag = (0, mongoose_1.model)('Tag', exports.tagSchema);
exports.default = Tag;
