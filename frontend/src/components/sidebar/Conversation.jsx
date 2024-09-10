import useConversation from '../../zustand/useConversation'

function Conversation({ conversation, lastIndex }) {
    const { selectedConversation, setSelectedConversation } = useConversation();

    const isSelected = selectedConversation?._id === conversation._id;


    return (
        <>
            <div className={`flex gap-2 items-center hover:bg-slate-400 rounded p-2 py-1 cursor-pointer ${isSelected ? "bg-slate-400" : ""}`}
                onClick={() => setSelectedConversation(conversation)}
            >
                <div className="avatar online">
                    <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">{conversation.fullName}</h3>
                    <p className="text-sm text-slate-300">You:Hello, how are you doing?</p>
                </div>
            </div>

            {!lastIndex && <div className="divider my-0 py-0 h-1" />}
        </>

    )
}

export default Conversation