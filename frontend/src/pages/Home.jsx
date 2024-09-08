import MessageContainer from "../components/messages/MessageContainer"
import Sidebar from "../components/sidebar/Sidebar"
import { Toaster } from 'react-hot-toast';
function Home() {
  return (
    <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
        <Toaster />
        <Sidebar />
        <MessageContainer />
    </div>
    
  )
}

export default Home