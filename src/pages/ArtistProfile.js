import React, { Component } from "react";
import "./ArtistProfile.css";
import Header2 from "../components/Header2";
import { Button } from "../components/Button";
import Edit from "../images/editbutton.png";
import singerpic1 from "../images/singerpic1.png";
import singerpic2 from "../images/singerpic2.png";
import singerpic3 from "../images/singerpic3.png";
import singerpic4 from "../images/singerpic4.png";

const ClickMyRequestsArtist = () => {
  window.location.assign('/artistrequests');
}

const ClickMyScheduleArtist = () => {
  window.location.assign('/artistschedule');
}

function ArtistProfile() {
  return (
    <>
      <div>
        <Header2 />
      </div>

      <div className="gridContainerAP">
        <div className="profileTitleAP">
          <h1>Becky McNeice | Artist Profile</h1>
        </div>

        <div className="editAP">
          <a href="/editartist"> 
         <img className="editAP" src={Edit} /> 
         </a>
        </div>

        <div className="contentCardAP">
 

            <div className="profilePicAP">
            <div className="nameAPO">Name:  <div className="nameAPO2">   Becky  </div> </div>
                <div className="nameAPO">Town: <div className="nameAPO2">   Belfast  </div></div>
                <div className="nameAPO">Genres: <div className="nameAPO2">   Pop  </div></div>
            </div>


                <div className="bioAP">
                <div className="bioTitleAP">Bio:</div>
                <div className="bioParagraphAP">Becky McNeice is an artist/producer from Belfast who makes bedroom pop and dance music.</div>
                <div className="instTitleAP">Instruments:</div>
                <div className="instCirclesAP"> 
                <div className="instIconsAP"></div>
                <div className="instIconsAP"></div>
                <div className="instIconsAP"></div>
                <div className="instIconsAP"></div>
                <div className="instIconsAP"></div>
                </div>
            </div>


        </div>

        <div className="contentBoxAP">
          <div className="photoGalleryAP  ">
            <img className="photo1AP" src={singerpic1} />
            <img className="photo2AP" src={singerpic2} />
            <img className="video1AP" src={singerpic3} />
            <img className="video2AP" src={singerpic4} />
          </div>

          <div className="linksAP">
            <div className="instagramLinkAP">Instragram:</div>
            <div className="soundcloudLinkAP">Soundcloud:</div>
            <div className="spotifyLinkAP">Spotify:</div>
          </div>

          <div className="requestButtonsAP">
            <div className="myReqAP">
              <Button onClick={ClickMyRequestsArtist}>My Requests</Button>
            </div>
            <div className="mySchedAP">
              <Button  onClick={ClickMyScheduleArtist}>My Schedule</Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtistProfile;
