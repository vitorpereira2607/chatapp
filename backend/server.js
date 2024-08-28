import dotenv from "dotenv"
dotenv.config();


import express from "express";
import authRoutes from "./routes/authRoutes.js"
import {config} from "./config/config.js";
import db from "./db/db.js";

const app = express();
const PORT = config.server.port || 5000;

app.use(express.json());
app.use('/api/auth/', authRoutes);

const startServer = async () => {
    try {
        
        await db._connect();

        app.listen(PORT, () => {
            console.log(`Server running: http://localhost:${PORT}`);
        })
    } catch (error) {
        console.error("Failed to start the server", error)
        process.exit(1)
    }
}

startServer();