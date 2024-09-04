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

            const result = await AuthService.login({
                username,
                password
            }, res)

            res.status(200).json(result);

        } catch (error) {
            console.error(error);
            res.status(400).json({error: error.message})
        }
    }

    logout(req, res) {
        try{
            res.clearCookie("jwt", "", { maxAge: 0 });
            res.clearCookie("refreshJwt", "", { maxAge: 0 });
            res.status(200).json({message: "Logged out successfully"}); 
        } catch (error) {
            console.error(`Error in logout: ${error.message}`);
            res.status(400).json({error: error.message})
        }
    }
}

export default new AuthController()