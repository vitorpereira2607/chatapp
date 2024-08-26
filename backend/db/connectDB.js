import mongoose from 'mongoose';

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.CONNECTION_STRING)
        console.log("Connected to MongoDB.");
    } catch (error) {
        console.error("Error connecting to MongoDB", error.message)
        throw error;
    }
}

export default connectDB;