import Message from "../../models/MessageModel.js";
import Conversation from "../../models/ConversationModel.js";
import SocketService from "../socket/socketService.js";

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

            conversation.messages.push(newMessage);
            
            await Promise.all([newMessage.save(), conversation.save()]);
        
            SocketService.receiverSocketId(receiverId, newMessage);

            return newMessage;

        } catch (error) {
            console.error(`Error in sendMessage service: ${error.message}`);
            throw new Error("Error sending message");
        }
    }

    async getMessages(senderId, userToChatId){
        try {
            const conversation = await Conversation.findOne({
                participants: { $all: [senderId, userToChatId]}
            }).populate("messages");
    
            if (!conversation) {
                throw new Error("Conversation not found.");
            }

            return conversation;
            
        } catch (error) {
            console.error(`Error in getMessages service: ${error.message}`)
        }
    }

}

export default new MessageService();