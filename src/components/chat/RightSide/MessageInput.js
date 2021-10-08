import { useState } from 'react'
import { MainContext, useContext } from '../../../context'

function MessageInput() {
    const { handleNewMessage, selectedUser } = useContext(MainContext)
    const [mesage, setMesage] = useState("")



    if (selectedUser)
        return (
            <div>
                <form className="flex">
                    <input className="w-full p-4 bg-primary" placeholder="Message" type="text" onChange={e => {
                        setMesage(e.target.value)
                        console.log(e.target.value);
                    }} />
                    <input className="  p-4  hover:bg-opacity-50 bg-secondary cursor-pointer" type="submit" value="SEND" onClick={(e) => {
                        e.preventDefault();
                        handleNewMessage(mesage)
                    }} />
                </form>
            </div>
        )
    return(
        null
    )
}


export default MessageInput
