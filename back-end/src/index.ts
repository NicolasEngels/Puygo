import express, { Request, Response } from 'express';
import cors from "cors";
import { checkJwt } from './checkJwt';
import connectToDatabase from './connectToDatabase';
import postNewTag from './postNewTag';
import postNewPost from './postNewPost';
import getTagsById from './getTagsById';
import getPostsById from './getPostsByid';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.use(cors({
    origin: process.env.FRONTEND_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
}));

app.use(express.json())

connectToDatabase();

app.post('/postNewTag/:id_User', async(req: Request, res: Response) => {
    const id_User = req.params.id_User;
    postNewTag(req, res, id_User);
});

app.get('/getTags/:id_User', async (req: Request, res: Response) => {
    const id_User = req.params.id_User;
    getTagsById(req, res, id_User);
});

app.post('/postNewPost/:id_User', async (req: Request, res: Response) => {
    const id_User = req.params.id_User;
    postNewPost(req, res, id_User);
});

app.get('/getPosts/:id_User', async (req: Request, res: Response) => {
    const id_User = req.params.id_User;
    getPostsById(req, res, id_User);
});

app.get('/', (req: Request, res: Response) => {
    res.send({ msg: "Server running" });
});

app.get('/private', checkJwt, (req: Request, res: Response) => {
    res.json({ msg: "You are connected to the back-end! (private route)" });
});

const port = process.env.SERVER_PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});