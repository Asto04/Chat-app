import { useAuthContext } from "../../context/AuthContext";
import { extractTime } from "../../utils/extractTime";
import useConversation from "../../zustand/useConversation";


const Message = ({message}) => {
  const {authUser} = useAuthContext();
  const {selectedConvesation} = useConversation();
  const fromMe = message.senderId === authUser._id;
  const formattedTime = extractTime(message.createdAt);
  const chatClassName = fromMe ? 'chat-end' : 'chat-start';
  const profilePic = fromMe ? authUser.profilePic : selectedConvesation?.profilePic;
  const bubbleBgColor = fromMe ? 'bg-blue-500' : "";

  return (
    <div className={`chat ${chatClassName}`}>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src={profilePic} alt="Image not found" />
            </div>
        </div>
        <div className={`chat-bubble text-white ${bubbleBgColor} pb-2`}>{message.message}</div>
        <div className='chat-footer opacity-50 text-us flex gap-1 items-center'>{formattedTime}</div>
    </div>
  )
}

export default Message;