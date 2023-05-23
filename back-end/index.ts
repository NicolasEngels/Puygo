import express, { Request, Response } from 'express';
import cors from "cors";
import { checkJwt } from './checkJwt';
import config from './config';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors({
    origin: config.REACT_APP_APPORIGIN,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.get('/', (req: Request, res: Response) => {
    res.send({ msg: "You are connected to the back-end! (home route)" });
});

app.get('/public', (req: Request, res: Response) => {
    res.send({ msg: "You are connected to the back-end! (public route)" });
});

app.get('/private', checkJwt, (req: Request, res: Response) => {
    res.json({ msg: "You are connected to the back-end! (private route)" });
});

const port = config.REACT_APP_SERVER_PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});