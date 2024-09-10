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
        port: process.env.PORT || 5000
    },
    cors: {
        cors_origin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    },
    secure: {
        node_env: process.env.NODE_ENV || 'development'
    }
}