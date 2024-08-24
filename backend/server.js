import dotenv from "dotenv"
dotenv.config();

import express from "express";
const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send("Hello World"))

app.listen(5000, () => console.log('server running: http://localhost:5000'))