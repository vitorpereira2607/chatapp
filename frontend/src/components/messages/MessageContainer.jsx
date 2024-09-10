import MessageInput from './MessageInput'
import Messages from './Messages'
import NoChatSelected from './NoChatSelected'
import useConversation from '../../zustand/useConversation'
import { useEffect } from 'react';

function MessageContainer() {
  const {selectedConversation, setSelectedConversation} = useConversation();

  useEffect(() => {
    
    // cleanup selectedConversation
    return () => {
      setSelectedConversation(null)
    }
  }, [])

  return (
    <div className="md:min-w-[450px] flex flex-col">
      {!selectedConversation ? <NoChatSelected /> : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span> <span className="text-gray-100">{selectedConversation.fullName}</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}

    </div>
  )
}

export default MessageContainer