import React, { useContext } from 'react'
import { MainContext } from '../../../context';
import { useHistory } from 'react-router';

function Settings() {
    const { logOut } = useContext(MainContext)
    const {push} = useHistory();
    return (
        <div>
            <input className="block w-full p-4 hover:bg-opacity-50 bg-secondary cursor-pointer"  type="submit" value="LOG OUT" onClick={() => {
                logOut()
                push("/login")
            }} />
        </div>
    )
}

export default Settings
