import User from "../../models/UserModel.js";
import passwordService from "../auth/passwordService.js";

class UserService {

    async getAllUsersExcept(loggedInUserId){
        try{
            const users = await User.find({ _id: { $ne: loggedInUserId}}).select("-password")
            if(!users){
                throw new Error('Users not found')
            }

            return users;
        }catch(error){
            console.error(`Error in getAllUsersExcept: ${error.message}`)
            throw new Error(`Error getting users: ${error.message}`)
        }
    }

    async getUserById(id){
        try {

            const user = await User.findById(id).select("-password")

            if(!user){
                throw new Error('User not found.')
            }

            return user;
            
        } catch (error) {
            console.error(`Error in getUserById: ${error.message}`)
            throw new Error(`Error getting user by id: ${error.message}`)
        }
    }

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