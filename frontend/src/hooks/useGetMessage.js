import {useEffect, useState} from 'react';
import useConversation from '../zustand/useConversation';
import toast from 'react-hot-toast';
const useGetMessages = () => {
    const [loading, setLoading] = useState(false);
    const { messages, setMessages, selectedConvesation } = useConversation();

    useEffect(() => {
        const getMessages = async () => {
            setLoading(true);
            try {
                const res = await fetch(`/api/messages/${selectedConvesation._id}`);
                const data = await res.json();
                if(data.error) {
                    throw new Error(data.error);
                }setMessages(data);
            } catch (error) {
                toast.error(error.message);
            } finally {
                setLoading(false);
            }
        }
        if(selectedConvesation?._id) getMessages();
        
    },[selectedConvesation?._id,setMessages])

    return {loading, messages};
}

export default useGetMessages;