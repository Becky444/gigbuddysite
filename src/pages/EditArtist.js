import React, { Component } from "react";
import "./EditArtist.css";
import Header2 from "../components/Header2";
import { Button } from "../components/Button";
import Edit from "../images/editbutton.png";



function EditArtist() {
  return (
    <>
      <div>
        <Header2 />
      </div>

      <div className="gridContainerAP">
        <div className="profileTitleAP">
          <h1>Becky McNeice | Artist Profile</h1>
        </div>

        <div className="saveBtn">
            <a href="/artistprofile">
          <Button>Save Changes</Button>
           </a>
        </div>

        <div className="contentCardAP">
 
            <div className="profilePicAP">

            <div className="nameAP">Name:
            <input/>
             </div>

                <div className="nameAP">Town: 
                <input/>
                </div>

                <div className="nameAP">Genres: <input/>
                </div>
            </div>

                <div className="bioAP">
                <div className="bioTitleAP">Bio:</div>
                <div className="bioParagraphAP"> 
                <textarea/>
                </div>
                <div className="instTitleAP">Instruments:</div>
                <div className="instCirclesAP"> 
                <div className="instIconsAP">
                <input type="checkbox"></input>
                </div>
                <div className="instIconsAP">
                <input type="checkbox"></input>
                </div>
                <div className="instIconsAP">
                <input type="checkbox"></input>
                </div>
                <div className="instIconsAP">
                <input type="checkbox"></input>
                </div>
                <div className="instIconsAP">
                <input type="checkbox"></input>
                </div>
                </div>
            </div>

            {/* <div className="instruments">

                    <div className="instTitle">Instruments</div>
                    <div className="instrumentIcons"></div>
                    <div className="instrumentIcons"></div>
                    <div className="instrumentIcons"></div>
                    <div className="instrumentIcons"></div>
                    <div className="instrumentIcons"></div>

            </div> */}

        </div>

        <div className="contentBoxAP">
          <div className="photoGalleryAP  ">
            <div className="photo1AP">pic1</div>
            <div className="photo2AP">pic2</div>
            <div className="video1AP">vid1</div>
            <div className="video2AP">vid2</div>
          </div>

          <div className="linksAP">
            <div className="instagramLinkAP">Instragram: <input/></div>
            <div className="soundcloudLinkAP">Soundcloud:<input/></div>
            <div className="spotifyLinkAP">Spotify:<input/></div>
          </div>

         
        </div>
      </div>
 
    </>
  );
}

export default EditArtist;
