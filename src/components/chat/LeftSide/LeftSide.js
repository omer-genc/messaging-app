import React, { useState } from 'react'
import Search from './Search'
import Settings from './Settings'
import UsersList from './UsersList'

function LeftSide() {
    const [searchText, setSearchText] = useState("")

    return (
        <div className="flex flex-col w-4/12 h-screen border border-black bg-primary">
            <Search setSearchText={setSearchText}/>
            <UsersList searchText = {searchText}/>
            <Settings/>
        </div>
    )
}

export default LeftSide
