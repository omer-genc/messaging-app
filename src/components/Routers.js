import React from 'react'
import { Route, Switch, HashRouter as Router, Redirect } from 'react-router-dom'
import Chat from '../pages/Chat'
import Login from '../pages/Login'

function Routers() {
    return (
        <Router>
            {
                localStorage.getItem("me")
                    ? (<Redirect to={{
                        pathname: "/chat"
                    }} />)
                    : (<Redirect to={{
                        pathname: "/login"
                    }} />)
            }
            <Switch>
                <Route path="/login" exact>
                    <Login></Login>
                </Route>

                <Route path="/chat" exact>
                    <Chat></Chat>
                </Route>

            </Switch>
        </Router>
    )
}

export default Routers
