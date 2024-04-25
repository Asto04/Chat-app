import {create} from 'zustand';

const useConversation= create((set) => ({
    selectedConvesation: null,
    setSelectedConversation: (selectedConvesation) => set({selectedConvesation}),
    messages:[],
    setMessages: (messages) => set({messages}),
}));

export default useConversation;