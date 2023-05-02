import React, { Component } from "react";
import "./PromoterProfile.css";
import Header2 from "../components/Header2";
import { Button } from "../components/Button";
import Edit from "../images/editbutton.png";

const ClickSendBookingRequest = () => {
  window.location.assign('/promoterschedule');
}
// const ClickSendCollaborationRequest = () => {
//   window.location.assign('/collaborationrequest');
// }

function PromoterProfile() {
  return (
    <>
      <div>
        <Header2 />
      </div>

      <div className="gridContainerPP">
        <div className="profileTitlePP">
          <h1>Joe Bloggs | Promoter Profile</h1>
        </div>

        <div className="editPP">
        <img className="editPP" src={Edit} />
        </div>

        <div className="contentCardPP">
 
            <div className="profilePicPP">

            <div className="namePP">Name:</div>
                <div className="namePP">Town:</div>
                <div className="namePP">Company:</div>
            </div>

                <div className="bioPP">
                <div className="bioTitlePP">Bio:</div>
                <div className="bioParagraphPP">Placeholder text for bio Placeholder text for bio Placeholder text for bio Placeholder text for bio Placeholder text for bio Placeholder text for bio Placeholder text for bio Placeholder text for bio</div>
                <div className="bioTitlePP"> Average event capacity:</div>
                <div className="bioTitlePP"> Standard fee:</div>

            </div>
            

        </div>

        <div className="contentBoxPP">
          <div className="photoGalleryPP">
            <div className="photo1PP">pic1</div>
            <div className="photo2PP">pic2</div>
            <div className="video1PP">vid1</div>
            <div className="video2PP">vid2</div>
          </div>

          <div className="linksPP">
            <div className="instagramLinkPP">Company instagram:</div>
            <div className="soundcloudLinkPP">Company website:</div>
            <div className="spotifyLinkPP">Company email:</div>
          </div>

          <div className="requestButtonsPP">
            <div className="myReqPP">
              <Button onClick={ClickSendBookingRequest}>My Schedule</Button>
            </div>
            {/* <div className="mySchedPP">
              <Button onClick={ClickSendCollaborationRequest}>Send collaboration request</Button>
            </div> */}
          </div>
        </div>
      </div>
    </>
  );
}

export default PromoterProfile;
