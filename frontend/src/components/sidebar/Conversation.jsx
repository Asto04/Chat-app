import useConversation from '../../zustand/useConversation';

const Conversation = ({conversation,lastIdx,emoji}) => {
    const {selectedConvesation, setSelectedConversation} = useConversation();
    const isSelected = selectedConvesation?._id === conversation._id;
        return (
            <>
                <div className={`flex gap-2 items-center hover:bg-sky-500 rounded p-1 py-1 cursor-pointer
                ${isSelected ? "bg-sky-500" : ""}
                `}
                    onClick={() => setSelectedConversation(conversation)}
                >
                    <div className="avatar online">
                        <div className="w-12 rounded-full">
                            <img src={conversation.profilePic} alt="user avatar" />
                        </div>
                    </div>
                    <div className="flex flex-col flex-1">
                        <div className="flex gap-3 justify-between"> 
                            <p className="font-bold text-gray-200">{conversation.fullName}</p>
                            <span className="text-x1">{emoji}</span>
                        </div>
                    </div>
                </div>
                {!lastIdx && <div className="divider my-0 py-0 h-1"/>}
            </>
        );
}

export default Conversation;

/*const Conversation = () => {
  return (
    <>
        <div className="flex gap-2 items-center hover:bg-sky-500 rounded p-1 py-1 curson-porinter">
            <div className="avatar online">
                <div className="w-12 rounded-full">
                    <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="user avatar" />
                </div>
            </div>
            <div className="flex flex-col flex-1">
                <div className="flex gap-3 justify-between"> 
                    <p className="font-bold text-gray-200">John Jack</p>
                    <span className="text-x1">😎</span>
                </div>
            </div>
        </div>
        <div className="divider my-0 py-0 h-1"/>
    </>
  );
};

export default Conversation;*/
