import jwt from 'jsonwebtoken';
import { config } from '../../config/config.js'

class TokenService {
    generateAccessToken(userId) {
        return jwt.sign({ userId }, config.jwt.secret_key, {
            expiresIn: '2h'
        })
    }

    generateRefreshToken(userId) {
        return jwt.sign({ userId }, config.jwt.refresh_secret_key, {
            expiresIn: '7d'
        })
    }   
}


export default new TokenService();