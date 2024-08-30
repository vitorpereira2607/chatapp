import Conversation from "../models/ConversationModel.js";
import Message from "../models/MessageModel.js";

class MessageController {
    async sendMessage(req, res) {
        try {
            const { message } = req.body;
            const { id: receiverId } = req.params;
            const senderId = req.user.id;

            let conversation = await Conversation.findOne({
                participants: { $all: [senderId, receiverId]}
            })

            if(!conversation){
                conversation = await Conversation.create({
                    participants: [senderId, receiverId]
                })
            }

            const newMessage = new Message({
                senderId,
                receiverId,
                message
            })

            if(newMessage){
                conversation.messages.push(newMessage);
            }

            await Promise.all([newMessage.save(), conversation.save()]);

            res.status(201).json(newMessage);

        } catch (error) {
            console.error("Error in sendMessage: ", error.message);
            res.status(500).json({ error: "Internal server error" })
        }
    }
}

export default new MessageController();