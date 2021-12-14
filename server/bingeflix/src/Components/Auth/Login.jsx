import React from 'react'
import {Link} from 'react-router-dom'
import "./Auth.scss"
import {useState,useContext} from 'react'
import { UserContext } from "../../UserContext";

const Login = () => {

    const { user, setUser } = useContext(UserContext);
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [error,setError]=useState('')

    const submitHandler = async (e)=>{
        e.preventDefault();
        try{
            const data = await fetch("/login",{
                method:'POST',
                credentials:'include',
                headers:{
                    'Content-Type': 'application/json'
                },
                body:JSON.stringify({email,password})    
            })
            const user = await data.json()
          
            setPassword('');
            setEmail('');     
            
            if(user.user){
                setUser(user.user)
                const token = user.user.accessToken
                localStorage.setItem('token',token)
            } else {
                setError(user)
            }
        } catch(err){
            setError(err)
        }
    }

    return (
        <div className="authContainer">
            <div className="logo">
                BINGEFLIX
            </div>
            <div className="formContainer">
                <form onSubmit={(e)=>{submitHandler(e)}}>
                    <h3>Sign In</h3>
                    <input type="email" placeholder="Email" 
                    value={email}
                    onChange={e=>setEmail(e.target.value)}
                    />
                    <input type="password" placeholder="Password" 
                    value={password}
                    onChange={e=>setPassword(e.target.value)}
                    />
                    <button type="submit" className="loginButton">Sign In</button>
                    <span>
                        New to Netflix? &nbsp; &nbsp;<b><Link to="/signup">Sign up.</Link></b>
                    </span>
                </form>
                <div className="text-danger mt-4">
                      {error}
             </div>
            </div>
        </div>
    )
}

export default Login
