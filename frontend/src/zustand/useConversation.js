import {create} from 'zustand'

const getConversations = create((set) => ({
    selectedConversation: null,
    setSelectedConversation: (selectedConversation => set({selectedConversation})),
    messages: [],
    setMessages: (messages) => set({messages}),
}))

export default getConversations;