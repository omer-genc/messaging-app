import React from 'react'
import "./loginPage.css"

function LoginPage() {
    return (
        <div className="wrapper fadeInDown">
            <div id="formContent">
                <h2>Log in to your account</h2>
                <form>
                    <input type="text" id="login" className="fadeIn " name="login" placeholder="User Name" />
                    <input type="text" id="login" className="fadeIn " name="login" placeholder="First Name" />
                    <input type="text" id="login" className="fadeIn " name="Last Name" placeholder="Last Name" />
                    <input type="submit" className="fadeIn fourth" value="Log In" />
                </form>

            </div>
        </div>
    )
}

export default LoginPage
