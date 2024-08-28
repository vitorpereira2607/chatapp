import UserService from "../user/userService.js";
import ValidationService from "../../validation/validationService.js";
import PasswordService from "./passwordService.js";

class AuthService{
    async signUp({fullName, username, password, confirmPassword, gender}, res){
        ValidationService.validatePasswords(password, confirmPassword);
        ValidationService.validatePasswordsLenght(password);
        ValidationService.validateUserInput(fullName, username);

        const hashedPassword = await PasswordService.hashPassword(password);

        const newUser = await UserService.createUser({
            fullName,
            username,
            password: hashedPassword,
            gender
        }, res)

        return {
            _id: newUser._id,
            fullName: newUser.fullName,
            username: newUser.username,
            profilePic: newUser.profilePic,
        }
    }

    async login({username, password}){
        
    }
    
}


export default new AuthService();