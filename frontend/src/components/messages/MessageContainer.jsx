import { useEffect } from "react";
import Messages from "./Messages";
import MessageInput from "./MessageInput";
import {TiMessages} from "react-icons/ti";
import useConversation from "../../zustand/useConversation";
import { useAuthContext } from "../../context/AuthContext";

const MessageContainer = () => {
    const {selectedConversation, setSelectedConversation} = useConversation();

    useEffect(() => {

        //cleanup function (unmounts)
        return () => setSelectedConversation(null);
    },[setSelectedConversation])
  return (
    <div className="md:min-w-[1500px] flex flex-col">
        {!selectedConversation ? (
        <NoChatSelected />
    ) : (
            <>
                {/* header */}
                <div className="bg-slate-500 px-4 py-2 mb-2">
                    <span className="label-text">To:</span><span className="text-gray-900 font-bold">{selectedConversation.fullName}</span>
                </div>
                <Messages />
                <MessageInput />
            </>
        )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
    const { authUser } = useAuthContext();
    return (
        <div className="flex items-center justify-center w-full h-full text-center">
            <div className="px-4 text-center sm-text-lg md-text-x1 text-gray-200 font-semibold flex flex-col items-center gap-2">
                <p className="text-xl">Welcome 🤞 {authUser.fullname} 🎉</p>
                <p className="text-xl">Select a chat to start messaging</p>
                <p className="text-xl">Khaitan ChatZone</p>
                <TiMessages className='text-3x1 md:text-x1 text-center w-[60px] h-[60px]' />
            </div>
        </div>

    );
};