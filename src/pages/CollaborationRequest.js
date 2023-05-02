import React, { Component } from "react";
import "./CollaborationRequest.css";
import Header2 from "../components/Header2";
import { Button } from "../components/Button";
import MapsicleMap from "../images/MapsicleMap.png";
import email from "../images/email.png";    


function CollaborationRequest() {
  return (
    <>
      <div>
        <Header2 />
      </div>

      <div className="gridContainerCR">

      <div className="profileTitleMRA">
          <h1>Collaboration Request</h1>
        </div>

        <form className="collaborationRequestFormCR">

            <label for="fromCR">From:</label>
            <input type="text" id="fromCR" name="fromCR" required/><br></br>

            <label for="feeCR">Email:</label>
            <input type="text" id="feeCR" name="feeCR" required/><br></br>

            <label for="dateCR">Date:</label>
            <input type="text" id="dateCR" name="dateCR" required/><br></br>


            <label for="locationCR">Location:</label>
            <input type="text" id="locationCR" name="locationCR" required/><br></br>

            <label for="natureOfCollabCR">Nature of collab:</label>
            <input type="text" id="natureOfCollabCR" name="natureOfCollabCR" required/><br></br>

    

            <Button type="submit">Send</Button>

        </form>


        
      </div>
    </>
  );
}

export default CollaborationRequest;