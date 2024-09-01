import dotenv from "dotenv"
dotenv.config();

export const config = {
    db: {
        url: process.env.CONNECTION_STRING
    },
    jwt: {
        secret_key: process.env.JWT_SECRET_KEY,
        refresh_secret_key: process.env.JWT_REFRESH_SECRET_KEY
    },
    server: {
        port: process.env.PORT
    },
}