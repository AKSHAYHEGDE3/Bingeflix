import React from 'react'
import {Link} from 'react-router-dom'
import {useState,useContext} from 'react'
import "./Auth.scss"
import { UserContext } from "../../UserContext"
const Signup = () => {
    const { user, setUser } = useContext(UserContext);
    const [error,setError]=useState('')
    const [username,setUsername]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')

    const submitHandler = async (e)=>{
        e.preventDefault();

        try{
            const data = await fetch("/register",{
                method:'POST',
                credentials:'include',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({username,email,password})    
            })
            const user = await data.json()
            // console.log(user)
            setUsername('');
            setPassword('');
            setEmail('');     
            
            if(user.user){
                const token = user.user.accessToken
                 localStorage.setItem('token',token)
                setUser(user.user)
            } else {
                setError(user)
            }
        } catch(err) {
            setError(err)
        }

    }
    // console.log(user)
    // console.log(error)
    return (
        <div className="authContainer">
            <div className="logo">
                BINGEFLIX
            </div>
            <div className="formContainer">
                <form onSubmit={(e)=>{submitHandler(e)}}>
                    <h3>Sign Up</h3>
                    <input
                     type="text" placeholder="username"
                     value={username}
                     onChange={e=>setUsername(e.target.value)}
                     />
                    <input type="email" placeholder="Email" 
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    />
                    <input type="password" placeholder="Password" 
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    />
                    <button type="submit" className="loginButton">Sign Up</button>
                    <span>
                      Have an account? &nbsp; &nbsp;<b><Link to="/login">Sign in.</Link></b>
                    </span>
                </form>
                <div className="text-danger mt-4">
                      {error}
             </div>
            </div>
           
        </div>
    )
}

export default Signup
