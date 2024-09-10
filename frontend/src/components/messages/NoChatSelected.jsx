import { ChatBubbleLeftRightIcon as ChatIcon } from "@heroicons/react/24/outline";
import { useAuthContext } from "../../context/AuthContex";
function NoChatSelected() {

  const {authUser} = useAuthContext();
  
  return (
    <div className="flex items-center justify-center size-full">
        <div className="px-4 text-center sm:text-lg md:text-lx text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome 👋 {authUser.fullName} 😊</p>
        <p>Select a chat to start messaging</p>
        <ChatIcon className="size-20 text-gray-300" />
        </div>
    </div>
  )
}

export default NoChatSelected;