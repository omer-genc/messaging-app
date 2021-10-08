import React from 'react'
import Header from './Header'
import MessageInput from './MessageInput'
import Messages from './Messages'

function RightSide() {
    return (
        <div className="flex flex-col w-8/12 h-screen border border-black">
            <Header/>
            <Messages/>
            <MessageInput/>
        </div>
    )
}

export default RightSide
