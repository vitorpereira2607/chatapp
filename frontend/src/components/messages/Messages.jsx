import { useEffect, useRef } from "react";
import useGetMessages from "../../hooks/useGetMessages"
import MessageSkeleton from "../skeletons/messageSkeleton";
import Message from "./Message"

function Messages() {
  const { messages, loading } = useGetMessages();
  const lastMessageRef = useRef();
  useEffect(() => {
    lastMessageRef.current?.scrollIntoView({behavior: "smooth"})
  })
  return (
    <div className="px-4 flex-1 overflow-auto">
      {!loading && messages.length > 0 && (
        messages.map((message) => (
          <div 
          key={message._id}
          ref={lastMessageRef}
          >
            <Message
              message={message}
            />
            </div>
        ))
      )}
      {loading && [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  )
}

export default Messages