import React, { Component } from "react";
import "./PromoterProfileOther.css";
import Header2 from "../components/Header2";
import { Button } from "../components/Button";
import Edit from "../images/editbutton.png";

function PromoterProfileOther() {
  return (
    <>
      <div>
        <Header2 />
      </div>

      <div className="gridContainerPPO">
        <div className="profileTitlePPO">
          <h1>Joe Bloggs | Promoter Profile</h1>
        </div>

        <div className="editPPO">
        {/* <img className="edit" src={Edit} /> */}
        </div>

        <div className="contentCardPPO">
 
            <div className="profilePicPPO">

            <div className="namePPO">Name:</div>
                <div className="namePPO">Town:</div>
                <div className="namePPO">Company:</div>
            </div>

                <div className="biPPOo">
                <div className="bioTitlePPO">Bio:</div>
                <div className="bioParagraphPPO">Placeholder text for bio Placeholder text for bio Placeholder text for bio Placeholder text for bio Placeholder text for bio Placeholder text for bio Placeholder text for bio Placeholder text for bio</div>
                <div className="bioTitlePPO"> Average event capacity:</div>
                <div className="bioTitlePPO"> Standard fee:</div>

            </div>
            

        </div>

        <div className="contentBoxPPO">
          <div className="photoGalleryPPO">
            <div className="photo1PPO">pic1</div>
            <div className="photo2PPO">pic2</div>
            <div className="video1PPO">vid1</div>
            <div className="video2PPO">vid2</div>
          </div>

          <div className="linksPPO">
            <div className="instagramLinkPPO">Company instagram:</div>
            <div className="soundcloudLinkPPO">Company website:</div>
            <div className="spotifyLinkPPO">Company email:</div>
          </div>

          <div className="requestButtonsPPO">
            <div className="contactPPO">
              <Button>Contact</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PromoterProfileOther;
