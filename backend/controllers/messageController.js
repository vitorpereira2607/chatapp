import MessageService from "../services/message/messageService.js";

class MessageController {
    async sendMessage(req, res) {
        try {
            const { message } = req.body;
            const { id: receiverId } = req.params;
            const senderId = req.user.id;

            const newMessage = await MessageService.sendMessage(senderId, receiverId, message)

            res.status(201).json(newMessage);

        } catch (error) {
            console.error(`Error in sendMessage: ${error.message}`);
            res.status(500).json({ error: "Internal server error" })
        }
    }

    async getMessages(req, res) {
        try {
            const { id: userToChatId } = req.params;
            const senderId = req.user._id;

            if (!userToChatId) {
                return res.status(400).json({ error: "User ID to chat with is required." });
            }

            const conversation = await MessageService.getMessages(senderId, userToChatId)

            if(!conversation) {
                return res.status(200).json([])
            }

            const messages = conversation.messages

            res.status(200).json(messages)

        } catch (error) {
            console.error("Error in getMessages: ", error.message);
            res.status(500).json({ error: "Internal server error" })
        }
    }
}

export default new MessageController();