import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();

const url = process.env.DATABASE_URL || '';

const connectToDatabase = async () => {
    try {
        await mongoose.connect(url)
        console.log('connnected to mongodb')
    } catch (error) {
        console.log(error)
    }
};

export default connectToDatabase;