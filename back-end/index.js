"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const express_oauth2_jwt_bearer_1 = require("express-oauth2-jwt-bearer");
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
app.use((0, cors_1.default)({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));
const checkJwt = (0, express_oauth2_jwt_bearer_1.auth)({
    audience: process.env.AUDIENCE || 'default_audience',
    issuerBaseURL: `https://${process.env.DOMAIN}/`,
});
app.get('/', (req, res) => {
    res.send({ msg: "You are connected to the back-end! (home route)" });
});
app.get('/public', (req, res) => {
    res.send({ msg: "You are connected to the back-end! (public route)" });
});
app.get('/private', checkJwt, (req, res) => {
    res.send({ msg: "You are connected to the back-end! (private route)" });
});
const port = process.env.SERVER_PORT;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
