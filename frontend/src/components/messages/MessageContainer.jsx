import MessageInput from './MessageInput'
import Messages from './Messages'
import NoChatSelected from './NoChatSelected'

function MessageContainer() {
  const chatSelected = true;
  return (
    <div className="md:min-w-[450px] flex flex-col">
      {chatSelected ? <NoChatSelected /> : (
        <>
          <div className="bg-slate-500 px-4 py-2 mb-2">
            <span className="label-text">To:</span> <span className="text-gray-100">John Doe</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}

    </div>
  )
}

export default MessageContainer