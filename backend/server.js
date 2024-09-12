import {config} from "./config/config.js";
import db from "./db/db.js";


import express from "express";
import { app, server } from "./socket/socket.js";
import cookieParser from "cookie-parser";
import cors from "cors";

import authRoutes from "./routes/authRoutes.js"
import messageRoutes from "./routes/messageRoutes.js";
import userRouter from "./routes/userRoutes.js"

const allowedOrigin = config.cors.cors_origin;

const PORT = config.server.port;

app.use(cors({
    origin: [allowedOrigin, "http://localhost:3000"], 
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true
}));
  
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use('/api/auth', authRoutes);
app.use('/api/messages', messageRoutes);
app.use('/api/users', userRouter);

const startServer = async () => {
    try {
        await db._connect();

        server.listen(PORT, () => {
            console.log(`Server running: http://localhost:${PORT}`);
        })
    } catch (error) {
        console.error("Failed to start the server", error)
        process.exit(1)
    }
}

startServer();