import React from 'react'
import Chat from './Chat'
import "./chatPage.css"
import Footer from './Footer'
import MainHeader from './MainHeader'

function Main() {
    return (
        <main>
            <MainHeader/>
            <Chat/>
            <Footer/>
        </main>
    )
}

export default Main
