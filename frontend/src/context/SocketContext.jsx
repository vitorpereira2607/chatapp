import { useContext, useState } from "react";
import { createContext } from "react";
import { useAuthContext } from "./AuthContex";
import { useEffect } from "react";
import { io } from "socket.io-client";

const SocketContext = createContext();

export const useSocketContext = () => {
    return useContext(SocketContext)
}

export const SocketProvider = ({ children }) => {
    const [socket, setSocket] = useState(null);
    const [onlineUsers, setOnlineUsers] = useState([])
    const {authUser} = useAuthContext();

    useEffect(() => {
        if(authUser){

            const socket = io("http://localhost:5000", {
                query: {
                    userId: authUser._id,
                    name: authUser.username
                }
            });
            setSocket(socket);

            socket.on("getOnlineUsers", (users) => {
                setOnlineUsers(users)
            })

            return () => {
                socket.close();
                setSocket(null)
            }
        } else {
            if(socket) {
                socket.close();
                setSocket(null)
            }
        }
    }, [authUser])

    return <SocketContext.Provider value={{socket, onlineUsers}}>
        {children}
    </SocketContext.Provider>
}