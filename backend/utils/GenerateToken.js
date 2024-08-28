import TokenService from '../services/auth/tokenService.js';
import CookieService from '../services/auth/cookieService.js';

const generateTokenAndSetCookie = (userId, res) => {
    try {

        if (!userId) {
            throw new Error("User id is required")
        }

        if (!res) {
            throw new Error("Response object is required")
        }

        const accessToken = TokenService.generateAccessToken(userId);
        const refreshToken = TokenService.generateRefreshToken(userId);

        CookieService.setAccessTokenCookie(res, accessToken);
        CookieService.setRefreshTokenCookie(res, refreshToken);

    } catch (error) {
        console.error("Failed to generate token and set cookie", error);
        res.status(500).json({ error: error.message })
    }

}

export default generateTokenAndSetCookie;