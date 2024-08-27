import UserService from "../user/userService.js";
import AuthValidationService from "./authValidationService.js";
import PasswordService from "./passwordService.js";

class AuthService{
    async signUp({fullName, username, password, confirmPassword, gender}){
        AuthValidationService.validatePasswords(password, confirmPassword);
        AuthValidationService.validatePasswordsLenght(password);
        AuthValidationService.validateUserInput(fullName, username);

        await UserService.checkUserExist(username);

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
    
}


export default new AuthService();