import {useContext} from 'react'
import { MainContext } from '../context'

function User({user_name, user_id}) {
    const {handleSetSelectedUser} = useContext(MainContext)
    
    return (
        <div className="flex p-2 mb-1 bg-white hover:bg-secondary" onClick={()=>handleSetSelectedUser(user_id)}>
           <div className="h-8 w-8 bg-primary rounded-full"></div>
           <div className="ml-2">{user_name}</div>
        </div>
    )
}

export default User
