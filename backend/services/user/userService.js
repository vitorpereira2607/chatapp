import User from "../../models/UserModel.js";

class UserService {

    async checkUserExist(username) {
        const user = await User.findOne({ username });

        if (user) {
            throw new Error("Username already exists.")
        }
    }

    async createUser(userData) {
        const newUser = new User(userData)
        await newUser.save()

        return newUser;
    }
}

export default new UserService();