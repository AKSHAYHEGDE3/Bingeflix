import React from 'react'
import {Link} from 'react-router-dom'
import "./Auth.scss"

const Login = () => {
    return (
        <div className="authContainer">
            <div className="logo">
                BINGEFLIX
            </div>
            <div className="formContainer">
                <form >
                    <h3>Sign In</h3>
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="loginButton">Sign In</button>
                    <span>
                        New to Netflix? &nbsp; &nbsp;<b><Link to="/signup">Sign up.</Link></b>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default Login
