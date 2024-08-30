import User from "../../models/UserModel.js";
import passwordService from "../auth/passwordService.js";

class UserService {

    async ensureUserDoesNotExist(username) {
        try {
            const user = await User.findOne({ username });

            if (user) {
                throw new Error("User already exists");
            }

        } catch (error) {
            console.error(`Error in ensureUserDoesNotExist: ${error.message}`);
            throw new Error(`Failed to check if user exists: ${error.message}`);	
        }

    }

    async createUser(userData) {
        try {
            await this.ensureUserDoesNotExist(userData.username);
            const newUser = new User(userData);
            await newUser.save();

            return newUser;
        } catch (error) {
            console.error(error);
            throw new Error(`Failed to create user: ${error.message}`);
        }
    }

    async authenticateUser(username, password) {
        try {
            const user = await User.findOne({ username });

            if(!user) {
                throw new Error("User not found!");
            }
            const isMatchPassword = await passwordService.comparePassword(password, user.password);

            if(!isMatchPassword) {
                throw new Error("Invalid password!");
            }

            return user;
        } catch (error) {
            throw new Error(`Failed to authenticate user: ${error.message}`);
        }
    }
}

export default new UserService();