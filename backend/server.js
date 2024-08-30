import {config} from "./config/config.js";
import express from "express";
import cookieParser from "cookie-parser";
import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js";
import db from "./db/db.js";

const app = express();
const PORT = config.server.port || 5000;

app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);

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