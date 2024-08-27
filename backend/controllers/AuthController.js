import User from '../models/UserModel.js';
import bcrypt from 'bcryptjs'
import AuthService from '../services/auth/authService.js';

class AuthController {

    async signup(req, res) {
        try {
            const { fullName, username, password, confirmaPassword, gender } = req.body;

            const result = await AuthService.signUp({
                fullName,
                username,
                password,
                confirmaPassword,
                gender
            })
        
            res.status(201).send(result)

        } catch (error) {
            console.error(error);
            res.status(400).json({error: error.message})
        }
    }

    login(req, res) {
        res.send("Login sucessfull");
    }

    logout(req, res) {
        res.send("Logout sucessfull")
    }
}

export default new AuthController()