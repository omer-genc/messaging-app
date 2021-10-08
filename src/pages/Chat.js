import React from 'react'
import LeftSide from '../components/chat/LeftSide/LeftSide.js'
import RightSide from '../components/chat/RightSide/RightSide.js'

function Chat() {
    return (
        <div className="flex flex-row ">
            <LeftSide/>
            <RightSide/>
        </div>
    )
}

export default Chat
