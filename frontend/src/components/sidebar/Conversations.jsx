import useGetConvesations from "../../hooks/useGetConvesations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
  const {loading, conversations} =  useGetConvesations();
  return (
    <div className="py-2 flex flex-col overflow-auto">

    {conversations.map((conversation,idx) => (
  <Conversation 
      key ={conversation._id}
      conversation={conversation}
      emoji={getRandomEmoji()}
      lastIdx={idx === conversations.length - 1}
  />
  ))}

      {loading ? <span className='loading loadin-spinner'></span> : null}
    </div>
  );
};

export default Conversations;
