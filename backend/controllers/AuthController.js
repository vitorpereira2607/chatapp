import AuthService from '../services/auth/authService.js';

class AuthController {

    async signup(req, res) {
        try {
            const { fullName, username, password, confirmPassword, gender } = req.body;

            const result = await AuthService.signUp({
                fullName,
                username,
                password,
                confirmPassword,
                gender
            })
        
            res.status(201).json(result)

        } catch (error) {
            console.error(error);
            res.status(400).json({error: error.message})
        }
    }

    async login(req, res) {
        try {
            const { username, password } = req.body;



            res.status(200).send("Login sucessfull");

        } catch (error) {
            
        }
    }

    logout(req, res) {
        res.send("Logout sucessfull")
    }
}

export default new AuthController()