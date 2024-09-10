import { useAuthContext } from '../../context/AuthContex'
import useConversation from '../../zustand/useConversation'
import { extractTime } from '../../utils/extractTime';


function Message({message}) {

  const {authUser} = useAuthContext();
  const {selectedConversation} = useConversation()
  const fromMe = message.senderId === authUser._id
  const chatClassName = fromMe ? 'chat-end' : 'chat-start'
  const formattedDate = extractTime(message.createdAt)
  const profilePic = fromMe ? authUser.profilePic : selectedConversation?.profilePic;
  const chatBgCollor = fromMe ? 'bg-blue-500' : '';

  return (
    <>
      <div className={`chat ${chatClassName}`}>
        <div className="chat-image avatar">
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS chat bubble component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
          </div>
        </div>
        <div className={`chat-bubble text-white ${chatBgCollor}`}>{message.message}</div>
        <div className="chat-footer opacity-50 text-xs flex gap-1 items-center">{formattedDate}</div>
      </div>
    </>
  )
}

export default Message