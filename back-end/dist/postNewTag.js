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
const Tag_1 = __importDefault(require("./Tag"));
const postNewTag = (req, res, id_User) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const duplicateTag = yield Tag_1.default.find({ name: req.body.name, id_User: id_User }).exec();
        if (duplicateTag.length > 0) {
            res.send({
                error: true,
                "msg": "Impossible d'ajouter le tag. Un tag similaire existe déjà."
            });
            return;
        }
        else {
            const data = new Tag_1.default({
                name: req.body.name,
                id_User: id_User
            });
            yield data.save();
            res.send({
                error: false,
                "msg": "posted"
            });
        }
    }
    catch (error) {
        console.log(error);
    }
});
exports.default = postNewTag;
