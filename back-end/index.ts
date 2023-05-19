import express, { Request, Response } from 'express';
import dotenv from 'dotenv';
dotenv.config();

const app = express();

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, world!');
});

const port = process.env.SERVER_PORT;

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});