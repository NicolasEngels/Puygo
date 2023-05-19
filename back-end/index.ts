import express, { Request, Response } from 'express';
import { auth } from "express-oauth2-jwt-bearer";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

const checkJwt = auth({
    audience: process.env.AUDIENCE || 'default_audience',
    issuerBaseURL: `https://${process.env.DOMAIN}/`,
});

app.get('/public', (req: Request, res: Response) => {
    res.send({ msg: "You are connected to the back-end! (public route)" });
});

app.get('/private', checkJwt, (req: Request, res: Response) => {
    res.send({ msg: "You are connected to the back-end! (private route)" });
});

const port = process.env.SERVER_PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});