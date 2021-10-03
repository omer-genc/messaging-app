import React from 'react'
import "./loginPage.css"
import { useState } from 'react'
import { useHistory } from 'react-router'

function LoginPage() {
    const [me, setMe] = useState({
        userName: "",
        firstName: "",
        lastName: ""
    })

    const handleUserName = (username) => {
        setMe({ ...me, userName: username })
    }
    const handleFirstName = (firstname) => {
        setMe({ ...me, firstName: firstname })
    }
    const handeLastName = (lastname) => {
        setMe({ ...me, lastName: lastname })
    }

    let history = useHistory();

    const login = (e) => {
        e.preventDefault();
        history.push("/chat");
        console.log(me)
        localStorage.setItem("me",JSON.stringify(me))
    }

    

    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <h2>Log in to your account</h2>
                <form>
                    <input type="text" className="fadeIn " placeholder="User Name" onChange={e => handleUserName(e.target.value)} />
                    <input type="text" className="fadeIn " placeholder="First Name" onChange={e => handleFirstName(e.target.value)} />
                    <input type="text" className="fadeIn " placeholder="Last Name" onChange={e => handeLastName(e.target.value)} />
                    <input type="submit" className="fadeIn" value="Log In" onClick={login} />
                </form>
            </div>
        </div>
    )
}

export default LoginPage
