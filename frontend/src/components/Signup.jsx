import React from "react"
import { useContext ,useRef} from "react"
import {Link} from "react-router-dom"
import axios from "axios"
import {UserContext}from "../context/userContext";
const Signup = () => {
    let userName = useRef();
    let userEmail = useRef();
    let userPassword = useRef();
    let {user , setUser} = useContext(UserContext);
    const handleSignup = (e) => {
        axios.post("http://localhost:8080/user/signup" , {
            userName:userName.current.value,
            userEmail:userEmail.current.value,
            userPassword:userPassword.current.value
        }).then(() => {
            localStorage.setItem("details" , {
                userName:userName,
                userEmail:userEmail
            })
            setUser(userName.current.value);
            console.log(user);
        }).catch((err) => {
            console.log(err);
        })
    }
    console.log(user);
    return (
        <section>
                <input ref = {userName} type="text" name="name" id="name" placeholder="Enter your name"/>
                <input ref = {userEmail} type="email" name="email" id="email" placeholder="Enter your email"/>
                <input ref = {userPassword} type="password" name="password" id="password" />
                <button onClick = { e => {handleSignup(e)}}>Submit</button>
            <Link to ="/user/login">Login?</Link>
        </section>
    )
}
export default Signup;