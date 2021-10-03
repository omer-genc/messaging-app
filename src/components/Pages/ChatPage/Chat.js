import React from 'react'
import "./chatPage.css"
import { useEffect } from 'react'
import { chatState, getChat, selectedUserState } from '../../../states/chatState'
import { useEntity } from 'simpler-state'

function Chat() {
    
    const selectedUser = useEntity(selectedUserState)
    
    useEffect(() => {
        getChat()
    }, [selectedUser])

    const chat = useEntity(chatState)


    return (
        <ul id="chat">

            {
                chat.map((message, index) => (
                    <li className="you">
                        <div class="entete">
                            <span class="status green"></span>
                            <h2>{message.author.userName}</h2>
                            <h3>10:12AM, Today</h3>
                        </div>
                        <div className="triangle"></div>
                        <div className="message">
                            {message.message}
                        </div>
                    </li>
                ))
            }

            {/* <li class="you">
                <div class="entete">
                    <span class="status green"></span>
                    <h2>Vincent</h2>
                    <h3>10:12AM, Today</h3>
                </div>
                <div class="triangle"></div>
                <div class="message">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                </div>
            </li>
            <li class="me">
                <div class="entete">
                    <h3>10:12AM, Today</h3>
                    <h2>Vincent</h2>
                    <span class="status blue"></span>
                </div>
                <div class="triangle"></div>
                <div class="message">
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor.
                </div>
            </li> */}
        </ul>
    )
}

export default Chat
