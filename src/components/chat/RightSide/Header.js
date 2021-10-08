import { MainContext, useContext } from '../../../context'
function Header() {
    const { selectedUser } = useContext(MainContext)

    if (selectedUser)
        return (
            <div className="flex p-5 h-20 bg-primary">
                <div className="h-8 w-8 bg-gray rounded-full"></div>
                <div className="pl-4">{selectedUser.first_name + " " + selectedUser.last_name}</div>
            </div>
        )
    return (
        null
    )

}

export default Header
