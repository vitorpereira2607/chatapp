import jwt from 'jsonwebtoken';

class TokenService {
    generateAccessToken(userId) {
        return jwt.sign({ userId }, process.env.JWT_SECRET_KEY, {
            expiresIn: '2h'
        })
    }

    generateRefreshToken(userId) {
        return jwt.sign({ userId }, process.env.JWT_REFRESH_SECRET_KEY, {
            expiresIn: '7d'
        })
    }   
}


export default new TokenService();