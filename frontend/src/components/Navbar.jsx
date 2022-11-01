import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import {UserContext}from "../context/userContext";
const Navbar = () => {
    const {user , setUser} = useContext(UserContext);
    const userDetails = JSON.parse(localStorage.getItem('details'));
    console.log(userDetails);
    return(
    <section>
        <nav>
                <Link to = "/user/signup">Signup</Link>
                <Link to ="/user/login">Login</Link>
        </nav>
        <p>Hi {userDetails.userName}</p>
    </section>
    )
}
export default Navbar;