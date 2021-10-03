// import React, {useState, useContext} from 'react'
import "./chatPage.css"
// import MessageContext from '../MessageContext'

function Footer() {

    // const {allmessage, sendMessage} = useContext(MessageContext);
    // const [message, setMessage] = useState("")

    return (
        
        <footer>
            <input type="text" placeholder="Type your message"/>
            <input type="submit" value="send"/>
        </footer>
    )
}

export default Footer
