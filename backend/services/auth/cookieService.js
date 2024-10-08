import { config } from '../../config/config.js'

class CookieService {
    setAccessTokenCookie(res, accessToken) {
        res.cookie("jwt", accessToken, {
            maxAge: 1000 * 60 * 60, // 1 hour
            httpOnly: true, // prevent XSS attacks cross site scripting
            sameSite: "strict", // csrf attacks cross-site request forgery attacks
            secure: config.secure.node_env
        })
    }

    setRefreshTokenCookie(res, refreshToken) {
        res.cookie("refreshJwt", refreshToken, {
            maxAge: 1000 * 60 * 60 * 24 * 7, // 7 days
            httpOnly: true, 
            sameSite: "strict", 
            secure: config.secure.node_env
        })
    }
}

export default new CookieService();

