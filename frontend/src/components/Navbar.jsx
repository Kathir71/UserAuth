import React from "react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import {UserContext}from "../context/userContext";
const Navbar = () => {
    let userDetails = null;
    if ( localStorage.getItem('details'))
    {
        userDetails = JSON.parse(localStorage.getItem('details'));
    }
    return(
    <section>
        <div>hell</div>
        <nav>
                <Link to = "/user/signup">Signup</Link>
                <Link to ="/user/login">Login</Link>
        </nav>
        <p>Hi {userDetails ? "Hello" :"Please Login "}</p>
    </section>
    )
}
export default Navbar;