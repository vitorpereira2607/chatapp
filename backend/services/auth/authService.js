import UserService from "../user/userService.js";
import ValidationService from "../../services/validation/validationService.js";
import PasswordService from "./passwordService.js";
import generateTokenAndSetCookie from "../../utils/GenerateToken.js";

class AuthService{
    async signUp({fullName, username, password, confirmPassword, gender}){
        ValidationService.validatePasswords(password, confirmPassword);
        ValidationService.validatePasswordsLenght(password);
        ValidationService.validateUserInput(fullName, username);

        const hashedPassword = await PasswordService.hashPassword(password);

        const newUser = await UserService.createUser({
            fullName,
            username,
            password: hashedPassword,
            gender
        })

        return {
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic,
        }
    }

    async login({username, password}){
        const user = await UserService.authenticateUser(username, password);
        
        if(!user){
            throw new Error("Invalid username or password");
        }

        const token = generateTokenAndSetCookie(user._id, res);

        if(!token){
            throw new Error("Failed to generate token");
        }
        
        return {
            username: user.username,
            token
        }
    }
    
}


export default new AuthService();