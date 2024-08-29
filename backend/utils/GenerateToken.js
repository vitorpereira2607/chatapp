import TokenService from '../services/auth/tokenService.js';
import CookieService from '../services/auth/cookieService.js';

const generateTokenAndSetCookie = (userId) => {
    try {

        if (!userId) {
            throw new Error("User id is required");
        }

        const accessToken = TokenService.generateAccessToken(userId);
        const refreshToken = TokenService.generateRefreshToken(userId);

        CookieService.setAccessTokenCookie(res, accessToken);
        CookieService.setRefreshTokenCookie(res, refreshToken);

    } catch (error) {
        throw new Error(`Failed to generate token and set cookie: ${error.message}`);	
    }

}

export default generateTokenAndSetCookie;