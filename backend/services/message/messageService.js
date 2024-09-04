import Message from "../../models/MessageModel.js";
import Conversation from "../../models/ConversationModel.js";

class MessageService{
    async sendMessage(senderId, receiverId, messageContent){
        try {
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
                message: messageContent
            })

            if(newMessage){
                conversation.messages.push(newMessage);
            }

            await Promise.all([newMessage.save(), conversation.save()]);

            return newMessage;
        } catch (error) {
            console.error(`Error in sendMessage service: ${error.message}`);
            throw new Error("Error sending message");
        }
    }

    async getMessages(senderId, userToChatId){
        const conversation = await Conversation.findOne({
            participants: { $all: [senderId, userToChatId]}
        }).populate("messages");

        if (!conversation) {
            return res.status(404).json({ error: "Conversation not found." });
        }

        return conversation;
    }

}

export default new MessageService();