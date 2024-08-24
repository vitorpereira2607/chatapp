import dotenv from "dotenv"
dotenv.config();

import express from "express";
import authRoutes from "./routes/authRoutes.js"
const app = express();
const PORT = process.env.PORT || 5000;


app.get('/', (req, res) => res.send("Hello World"))


app.use('/api/auth/', authRoutes)
 
app.listen(PORT, () => console.log(`Server running: http://localhost:${PORT}`))