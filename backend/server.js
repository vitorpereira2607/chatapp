import dotenv from "dotenv"


import express from "express";
import authRoutes from "./routes/authRoutes.js"
import connectDB from "./db/connectDB.js";

const app = express();
const PORT = process.env.PORT || 5000;

console.log(PORT);

dotenv.config();

app.use(express.json());
app.use('/api/auth/', authRoutes);

const startServer = async () => {
    try {
        await connectDB()
        app.listen(PORT, () => {
            console.log(`Server running: http://localhost:${PORT}`);
        })
    } catch (error) {
        console.error("Failed to start the server", error)
        process.exit(1)
    }
}

startServer();