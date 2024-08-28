import User from "../../models/UserModel.js";
import generateTokenAndSetCookie from "../../utils/GenerateToken.js";
import passwordService from "../auth/passwordService.js";

class UserService {

    async ensureUserDoesNotExist(username) {
        const user = await User.findOne({ username });

        if (user) {
            throw new Error("Username already exists.")
        }
    }

    async createUser(userData, res) {
        try {
            await this.checkUserExist(userData.username);
            const newUser = new User(userData);
            await newUser.save();

            generateTokenAndSetCookie(newUser._id, res)

            return newUser;
        } catch (error) {
            throw new Error("Failed to create user.", error.message)
        }
    }

    async authenticateUser(username, password) {

        try {
            const user = await User.findOne({ username });

            if (!user) {
                throw new Error("User not found.")
            }

            const isMatchPassword = await passwordService.comparePassword(password, user.password);

            if (!isMatchPassword) {
                throw new Error("Invalid password.")
            }

            return user;
        } catch (error) {
            throw new Error("Failed to create user.", error.message)
        }
    }
}

export default new UserService();