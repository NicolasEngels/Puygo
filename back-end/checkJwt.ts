import { auth } from "express-oauth2-jwt-bearer";
import dotenv from 'dotenv';
dotenv.config();


export const checkJwt = auth({
    audience: process.env.AUDIENCE || 'default_audience',
    issuerBaseURL: `https://${process.env.DOMAIN}/`,
});