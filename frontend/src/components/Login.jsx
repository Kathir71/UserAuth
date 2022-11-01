import React from "react";
import { useContext ,useRef} from "react";
import axios from 'axios';
import {UserContext}from "../context/userContext";
const Login = () => {
    const {user , setUser} = useContext(UserContext);
    let formMail = useRef();
    let formPassword = useRef();
    const handleLogin = (e) => {
        e.preventDefault();
        let temp = formMail.current.value;
        axios.post ("http://localhost:8080/user/login" , {
            userEmail: formMail.current.value,
            userPassword:formPassword.current.value
        }).then((response) => {
            console.log(response.data[0].userName);
            localStorage.setItem("details" , JSON.stringify({
                userName:response.data[0].userName,
                userEmail:response.data[0].userEmail
            }))
        }).catch((err) => {
            console.log(err.message);
        })
    }
        return(
            <>
            <form onSubmit={e => handleLogin(e)}>
                <input type="email" ref = {formMail} name="email" id="email" />
                <input type="password" name="password" id="password" ref = {formPassword} />
                <input type="submit" value="login" />
            </form>
            </>
        )
    }
    export default Login;