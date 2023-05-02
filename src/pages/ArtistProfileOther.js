import React, { Component } from "react";
import "./ArtistProfileOther.css";
import Header2 from "../components/Header2";
import { Button } from "../components/Button";
import singerpic1 from "../images/singerpic1.png";
import singerpic2 from "../images/singerpic2.png";
import singerpic3 from "../images/singerpic3.png";
import singerpic4 from "../images/singerpic4.png";

function ArtistProfileOther() {
  return (
    <>
      <div>
        <Header2 />
      </div>

      <div className="gridContainerAPO">
        <div className="profileTitleAPO">
          <h1>Becky McNeice | Artist Profile</h1>
        </div>

        <div className="editAPO">
          
        </div>

        <div className="contentCardAPO">
 
            <div className="profilePicAPO">

            <div className="nameAPO">Name:  <div className="nameAPO2">   Becky  </div> </div>
                <div className="nameAPO">Town: <div className="nameAPO2">   Belfast  </div></div>
                <div className="nameAPO">Genres: <div className="nameAPO2">   Pop  </div></div>
            </div>

                <div className="bioAPO">
                <div className="bioTitleAPO">Bio:</div>
                <div className="bioParagraphAPO">Becky McNeice is a songwriter / producer from Belfast, Northern Ireland. She makes a range of music from pop to dance. </div>
                <div className="instTitleAPO">Instruments:</div>
                <div className="instCirclesAPO"> 
                <div className="instIconsAPO"></div>
                <div className="instIconsAPO"></div>
                <div className="instIconsAPO"></div>
                <div className="instIconsAPO"></div>
                <div className="instIconsAPO"></div>
                </div>
            </div>

  

        </div>

        <div className="contentBoxAPO">
          <div className="photoGalleryAPO">
          <img className="photo1AP" src={singerpic1} />
            <img className="photo2AP" src={singerpic2} />
            <img className="video1AP" src={singerpic3} />
            <img className="video2AP" src={singerpic4} />
          </div>

          <div className="linksAPO">
            <div className="instagramLinkAPO">Instragram:</div>
            <div className="soundcloudLinkAPO">Soundcloud:</div>
            <div className="spotifyLinkAPO">Spotify:</div>
          </div>

          <div className="requestButtonsAPO">
            <a href="/bookingrequest">
            <div className="myReqAPO">
              <Button>Send booking request</Button>
            </div>
            </a>
            <a href="/collaborationrequest">
            <div className="mySchedAPO">
              <Button>Send collaboration request</Button>
            </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default ArtistProfileOther;
