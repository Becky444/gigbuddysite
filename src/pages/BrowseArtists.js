import React, { Component } from "react";
import "./BrowseArtists.css";
import Header2 from "../components/Header2";
import singerpic1 from "../images/singerpic1.png";


function BrowseArtists() {
  return (
    <>
      <div>
        <Header2 />
      </div>

      <div className="gridContainerBA">
        <div className="profileTitleMRA">
          <h1>Browse Artists</h1>
        </div>

     

        <div class="artistsContainerBA">
          <div class="artistCardBA">
            <a href="/artistprofileother">
          <img className="browseArtistPicBA" src={singerpic1} />
          </a>
          <div class="artistCardTxtBA">Name: Becky McNeice</div>
            <div class="artistCardTxtBA">Town: Belfast</div>
            <div class="artistCardTxtBA">Genre: Dance</div>
          </div>

          <div class="artistCardBA">
            <div class="browseArtistPicBA"></div>
            <div class="artistCardTxtBA">Name: Rebecca McNephew </div>
            <div class="artistCardTxtBA">Town: Belfast</div>
            <div class="artistCardTxtBA">Genre: Pop</div>
          </div>

          <div class="artistCardBA">
            <div class="browseArtistPicBA"></div>
            <div class="artistCardTxtBA">Name: Joe Bloggs</div>
            <div class="artistCardTxtBA">Town: Belfast</div>
            <div class="artistCardTxtBA">Genre: Rock</div>
          </div>

          <div class="artistCardBA">
            <div class="browseArtistPicBA"></div>
            <div class="artistCardTxtBA">Name: Patrick Star</div>
            <div class="artistCardTxtBA">Town: Banbridge</div>
            <div class="artistCardTxtBA">Genre: Pop</div>
          </div>

          <div class="artistCardBA">
            <div class="browseArtistPicBA"></div>
            <div class="artistCardTxtBA">Name: Mr Krabs</div>
            <div class="artistCardTxtBA">Town: Lisburn</div>
            <div class="artistCardTxtBA">Genre: Pop</div>
          </div>

          <div class="artistCardBA">
            <div class="browseArtistPicBA"></div>
            <div class="artistCardTxtBA">Name: Squidward Tentacles</div>
            <div class="artistCardTxtBA">Town: Bangor</div>
            <div class="artistCardTxtBA">Genre: Country</div>
          </div>

          


        </div>
      </div>
    </>
  );
}

export default BrowseArtists;
