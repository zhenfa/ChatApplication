import React from 'react'

const MessageItem = ({ message, isMe }) => {
  return (
    <p className={`flex px-4 py-2 text-sm font-normal max-w-1/2 ${ (isMe ? ('bg-[##F1F1F1] text-black') : ('bg-primary text-white') ) }`}>
      {message}
    </p>
  )
}

export default MessageItem