import React from 'react'
import { useEntity } from 'simpler-state'
import { getUsers, usersState, selectUser, selectedUserState } from '../../../states/chatState'
import { useEffect } from 'react'
import "./chatPage.css"

function PeopleList() {

    useEffect(() => {
        getUsers()
    }, [])
    const users = useEntity(usersState)


    const selectedUser = useEntity(selectedUserState)



    return (
        <ul>
            {
                users.map((item, index) => (
                    <li key={index} onClick={()=>selectUser(item)}>
                        <img src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/1940306/chat_avatar_02.jpg" alt="" />
                        <div>
                            <h2>{item.userName}</h2>
                            <h3>
                                <span class="status orange"></span>
                                offline
                            </h3>
                        </div>
                    </li>
                ))
            }


        </ul>
    )
}

export default PeopleList
