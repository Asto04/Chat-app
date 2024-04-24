import React from 'react'

function Message() {
  return (
    <div className='chat chat-end'>
        <div className='chat-image avatar'>
            <div className='w-10 rounded-full'>
                <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_1280.png" alt="Image not found" />
            </div>
        </div>
        <div className={'chat-bubble text-white bg-blue-500'}>Hi! Kya kar rha h?</div>
        <div className='chat-footer opacity-50 text-us flex gap-1 items-center'>19:30</div>
    </div>
  )
}

export default Message;