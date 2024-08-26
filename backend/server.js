import dotenv from "dotenv"
dotenv.config();

import express from "express";
import authRoutes from "./routes/authRoutes.js"
import connectDB from "./db/db.js";

const app = express();
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => res.send("Hello World"))

app.use('/api/auth/', authRoutes)

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