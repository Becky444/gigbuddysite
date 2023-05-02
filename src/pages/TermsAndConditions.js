import React, { Component } from "react";
import Header from "../components/Header";
import "./TermsAndConditions.css";


function TermsAndConditions (){

    return ( 
    <>
        

        <div>
        <Header/>
        </div>



        <div className="profileTitlePP">
          <h1>Terms and Conditions</h1>
        </div>

     
       


        <div>
        <p className="terms">Welcome to GigBuddy, our website for promoters to book artists for gigs. By using our website, you agree to the following terms and conditions. If you do not agree to these terms and conditions, you should not use the website. </p>
        <h2 className="profileTitlePP">Collecting Information</h2>
        <p className="terms">Any information collected on our website such as names, passwords, email addresses and other details will be used solely for the purpose of making bookings and collaboration requests and improving our services. Nothing will be used without consent.</p>
        <h2 className="profileTitlePP">Using Information</h2>
        <p className="terms">By signing up to the website, you agree to provide accurate information and not impersonate any other artists or promoters.</p>
        <h2 className="profileTitlePP">Intellectual Property</h2>
        <p className="terms">By signing up to the website, you agree to not use any intellectual property that you do not own the rights to.</p>
        
        </div>



   
    </>
    
    )
}

export default TermsAndConditions;