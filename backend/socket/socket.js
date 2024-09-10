import { Server } from "socket.io";
import http from 'http'
import express from 'express'

const app = express();

const server = http.createServer(app)
const io = new Server(server, {
    cors: ["http://localhost:3000"],
    methods: ["GET", "POST"]
})

export const getReceiverSocketId = (receiverId) => {
    return userSocketMap[receiverId]
}
const userSocketMap = {} // {userId: socketId}


io.on('connection', (socket) =>  {
    console.log("a user connected", socket.id)

    const userId = socket.handshake.query.userId;


    if(userId != 'undefined'){
        userSocketMap[userId] = socket.id;
    }

    // Send the list of online users
    io.emit("getOnlineUsers", Object.keys(userSocketMap))

    socket.on('disconnect', () => {
        console.log('user disconnected')
        delete userSocketMap[userId]

        // Emit the updated online users list
        io.emit("getOnlineUsers", Object.keys(userSocketMap))
    })
})


export {app, io, server}