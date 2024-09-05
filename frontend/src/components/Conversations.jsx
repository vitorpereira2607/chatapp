
function Conversations() {
    return (
        <>
            <div className="flex gap-2 items-center hover:bg-slate-400 rounded p-2 py-1 cursor-pointer">
                <div className="avatar online">
                    <div className="w-16 rounded-full">
                        <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                    </div>
                </div>
                <div>
                    <h3 className="text-lg font-semibold">Maria</h3>
                    <p className="text-sm text-slate-300">You:Hello, how are you doing?</p>
                </div>
            </div>

            <div className="divider my-0 py-0 h-1" />

        </>
    )
}

export default Conversations