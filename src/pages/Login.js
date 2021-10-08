import React from 'react'
import { useHistory } from 'react-router';
import { MainContext, useContext } from '../context';


function Login() {
    const {push} = useHistory();

    const {getUserName, getFirstName, getLastName, login} = useContext(MainContext)
    

    return (
        <div className="h-screen w-screen text-center flex flex-col items-center
        justify-center">
            <div className="">
                <h3 className="font-bold">Log in to your account</h3>
                <form className="flex-row pt-8 w-96">
                    <input className="block w-full p-4 mb-4 bg-primary" placeholder="User Name" type="text" onChange={getUserName} />
                    <input className="block w-full p-4 mb-4 bg-primary" placeholder="First Name" type="text" onChange={getFirstName} />
                    <input className="block w-full p-4 mb-4 bg-primary" placeholder="Last Name" type="text" onChange={getLastName} />
                    <input className="block w-full p-4 mb-4 hover:bg-opacity-50 bg-secondary cursor-pointer" placeholder="User Name" type="submit" value="LOGIN" onClick={(e)=>{
                        e.preventDefault();
                        login(e)
                        push("/chat")
                    }} />
                </form>
            </div>
        </div>
    )
}

export default Login
