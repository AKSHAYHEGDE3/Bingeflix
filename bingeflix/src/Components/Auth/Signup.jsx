import React from 'react'
import {Link} from 'react-router-dom'
import "./Auth.scss"

const Signup = () => {
    return (
        <div className="authContainer">
            <div className="logo">
                BINGEFLIX
            </div>
            <div className="formContainer">
                <form >
                    <h3>Sign Up</h3>
                    <input type="text" placeholder="username" />
                    <input type="email" placeholder="Email" />
                    <input type="password" placeholder="Password" />
                    <button className="loginButton">Sign Up</button>
                    <span>
                      Have an account? &nbsp; &nbsp;<b><Link to="/login">Sign in.</Link></b>
                    </span>
                </form>
            </div>
        </div>
    )
}

export default Signup
