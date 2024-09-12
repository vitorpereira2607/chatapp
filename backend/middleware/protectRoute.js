import jwt from 'jsonwebtoken';
import { config } from '../config/config.js';
import UserService from '../services/user/userService.js';

class ProtectRoute {
    async protect(req, res, next){
        try {
            const token = req.cookies.jwt;

            console.log(token)

            if(!token){
                return res.status(401).json({error: "You need to be logged in to access this route"})
            }

            const decoded = jwt.verify(token, config.jwt.secret_key);

            if(!decoded){
                return res.status(401).json({error: "Invalid token"})
            }

            const user = await UserService.getUserById(decoded.userId);

            if(!user){
                return res.status(404).json({error: "User not found"})
            }

            req.user = user;

            next();

        } catch (error) {
            console.error("Error in protect middleware: ", error.message);
            res.status(500).json({error: "Internal server error"})
            
        }
    }
}

export default new ProtectRoute();