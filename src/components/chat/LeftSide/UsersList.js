import { MainContext, useContext } from "../../../context"
import User from "../../User"

function UsersList({searchText}) {
    const { usersList } = useContext(MainContext)

    const filteredUsers = usersList.filter(item => `${item.first_name}${item.last_name}${item.user_name}`.toLocaleLowerCase().includes(searchText.toLocaleLowerCase()))

    return (
        <div className="h-full border-t border-b border-black">
            {
                filteredUsers.map(user => (
                    <User key={user.id} user_name={user.first_name + " " + user.last_name} user_id={user.id}/>
                ))
            }
        </div>
    )
}

export default UsersList
