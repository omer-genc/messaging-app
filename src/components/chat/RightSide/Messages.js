import { MainContext, useContext } from '../../../context'


function Messages() {
    const { selectedUser } = useContext(MainContext)

    const user = localStorage.getItem("me")
    const userObj = JSON.parse(user)



    return (
        <div className="h-full p-4 border-t border-b border-black">
            {selectedUser ? selectedUser.messages.map( message => {
                if(message.sender === userObj.user_name)
                    return <div className="float-right text-right w-3/5 bg-secondary mt-4 p-4">{message.text} </div>
                else
                    return <div className="w-3/5 bg-primary mt-4 p-4">{message.text} </div>
            }  
            ) : ""}
        </div>
    )

}

export default Messages
