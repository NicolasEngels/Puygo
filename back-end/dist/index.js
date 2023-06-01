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
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const checkJwt_1 = require("./checkJwt");
const connectToDatabase_1 = __importDefault(require("./connectToDatabase"));
const postNewTag_1 = __importDefault(require("./postNewTag"));
const postNewPost_1 = __importDefault(require("./postNewPost"));
const getTagsById_1 = __importDefault(require("./getTagsById"));
const getPostsByid_1 = __importDefault(require("./getPostsByid"));
const deletePost_1 = __importDefault(require("./deletePost"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.use(express_1.default.json());
(0, connectToDatabase_1.default)();
app.post('/postNewTag/:id_User', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id_User = req.params.id_User;
    (0, postNewTag_1.default)(req, res, id_User);
}));
app.get('/getTags/:id_User', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id_User = req.params.id_User;
    (0, getTagsById_1.default)(req, res, id_User);
}));
app.post('/postNewPost/:id_User', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id_User = req.params.id_User;
    (0, postNewPost_1.default)(req, res, id_User);
}));
app.get('/getPosts/:id_User', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id_User = req.params.id_User;
    (0, getPostsByid_1.default)(req, res, id_User);
}));
app.delete('/deletePost/:id_Post', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id_Post = req.params.id_Post;
    (0, deletePost_1.default)(req, res, id_Post);
}));
app.get('/', (req, res) => {
    res.send({ msg: "Server running" });
});
app.get('/private', checkJwt_1.checkJwt, (req, res) => {
    res.json({ msg: "You are connected to the back-end! (private route)" });
});
const port = process.env.SERVER_PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
