import React from 'react'
import AsideHeader from './AsideHeader'
import "./chatPage.css"
import PeopleList from './PeopleList'
function Aside() {
    return (
        <aside>
            <AsideHeader/>
            <PeopleList/>
        </aside>
    )
}

export default Aside
