import mongoose from "mongoose";
import { config } from "../config/config.js";

class Database {
    async _connect() {
        try {
            console.log(config.db.url);
            const conn = await mongoose.connect(config.db.url)
    
            console.log(`MongoDB connected: ${conn.connection.host}`)
    
        } catch (error) {
            console.error(`Error: ${error.message}`);
            process.exit(1)
        }
    }
}


export default new Database();