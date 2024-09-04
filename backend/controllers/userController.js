
import User from "../models/UserModel.js";
import UserService from "../services/user/userService.js";

class UserController {
    async getUsers(req, res) {
        try {
            const loggedInUserId = req.user._id

            const allUsers = await UserService.getAllUsersExcept(loggedInUserId)

            res.status(200).json(allUsers)

        } catch (error) {
            console.error(`Error in getUsers: ${error.message}`)
            res.status(500).json({ error: "Internal Server Error"})
        }
    }
}

export default new UserController();