import "./Header.css" ;
import React, { Component } from "react";
import { Button } from "./Button";
import Logo from "../images/GBLOGO2 1.png";
import { Link } from "react-router-dom";

const ClickLogin = () => {
    window.location.assign('/login');
}

function Header(){
    return(
        <>
        <nav>
            <div className="logodiv">
            <img className="logo" src={Logo} alt="gigbuddy logo"/>
            </div>
            <a></a>

            <div className="navlinks">
                <ul id="Header">
                <li><Link to="/">Home </Link></li>
                    <li><Link to="/artists">Artists </Link></li>
                    <li><Link to="/promoters">Promoters </Link></li>
                    {/* <li><Link to="/events">Events </Link></li> */}
                    <li><Link to="/discover">Discover </Link></li>
                </ul>
            </div>

            <div className="headerbtns">
            <Button onClick={ClickLogin}>LOGIN</Button>  
            
            {/* <Button onClick={ClickArtistSignUp}>SIGN UP</Button> */}
            </div>
            
        </nav> 
        </>
    )
}

export default Header;