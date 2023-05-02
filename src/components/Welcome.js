import React from "react";
import { Button } from "./Button";
import './Welcome.css';
import WelcomeImage from "../images/MusicCelebrate.png"

const ClickArtistSignUp = () => {
    window.location.assign('/artistsignup');
}

const ClickPromoterSignUp = () => {
    window.location.assign('/promotersignup');
}


function Welcome(){
    return ( 

        <div className="overall">

        <div className="titleandtext">
                <h1>The New Way to Connect Musicians and Events in Northern Ireland</h1>
                <p>Welcome to Gigbuddy. Sign up to build a network and get booked for gigs. Please note that we are in our Beta phase at the minute so features are limited. </p>
            <div className="signupbuttons">
                <Button onClick={ClickArtistSignUp}>Artist Sign Up</Button>
                <Button onClick={ClickPromoterSignUp}>Promoter Sign Up</Button>
            </div>
        </div>

        <div className="welcomeimage">
            <img src={WelcomeImage}></img>
        </div>

        </div>
        
    )
}

export default Welcome