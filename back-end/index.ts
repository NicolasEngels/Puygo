import express, { Request, Response } from 'express';
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.get('/', (req: Request, res: Response) => {
    res.send({ msg: "You are connected to the back-end! (public route)" });
});

const port = process.env.SERVER_PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});