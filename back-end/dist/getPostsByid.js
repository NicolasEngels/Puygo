"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Post_1 = __importDefault(require("./Post"));
const getPostsById = (req, res, id_User) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const tags = yield Post_1.default.find({ id_User: id_User }).exec();
        res.json(tags);
    }
    catch (error) {
        console.error('Erreur lors de la récupération des Posts:', error);
        res.status(500).json({ message: 'Erreur lors de la récupération des posts' });
    }
});
exports.default = getPostsById;
