import { getReceiverSocketId, io } from "../../socket/socket.js";

class SocketService {
    receiverSocketId(receiverId, newMessage) {
        const receiverSocketId = getReceiverSocketId(receiverId);

        if (receiverSocketId) {
            io.to(receiverSocketId).emit("newMessage", newMessage);
        }
    }
}

export default new SocketService();
