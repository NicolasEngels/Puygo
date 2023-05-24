"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const checkJwt_1 = require("./checkJwt");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
app.get('/', (req, res) => {
    res.send({ msg: "You are connected to the back-end! (home route)" });
});
app.get('/public', (req, res) => {
    res.send({ msg: "You are connected to the back-end! (public route)" });
});
app.get('/private', checkJwt_1.checkJwt, (req, res) => {
    res.json({ msg: "You are connected to the back-end! (private route)" });
});
const port = process.env.SERVER_PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
