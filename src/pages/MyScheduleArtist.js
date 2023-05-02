import React, { Component } from "react";
import "./MyScheduleArtist.css";
import Header2 from "../components/Header2";
import { Button } from "../components/Button";
import MapsicleMap from "../images/MapsicleMap.png";
import email from "../images/email.png";    


function MyScheduleArtist() {
  return (
    <>
      <div>
        <Header2 />
      </div>

      <div className="gridContainerMSA">
        <div className="profileTitleMSA">
          <h1>Becky McNeice | My Schedule</h1>
        </div>

        <div className="mapMSA">
        <img className="MapsicleMapMSA" src={MapsicleMap} />
        </div>

        <div className="eventsPanelMSA">

            <div className="eventsAndCollabsMSA">
                
                <div className="eventPicMSA"></div> 

                <div className="eventDetailsMSA">
                    Event: xxxxx <br/>
                    Date: xxxxx <br/>
                    Set length: xxxxx<br/>
                    Fee: xxxxx<br/>
                    Promoter: xxxxx<br/>
                </div>

                <img className="emailArtistMSA" src={email} />

            </div>

            <div className="eventsAndCollabsMSA">
                
                <div className="eventPicMSA"></div> 

                <div className="eventDetailsMSA">
                    Event: xxxxx <br/>
                    Date: xxxxx <br/>
                    Set length: xxxxx<br/>
                    Fee: xxxxx<br/>
                    Musician proposed: xxxxx<br/>
                </div>

                <img className="emailArtistMSA" src={email} />

            </div>

            <div className="eventsAndCollabsMSA">
                
                <div className="eventPicMSA"></div> 

                <div className="eventDetailsMSA">
                    Event: xxxxx <br/>
                    Date: xxxxx <br/>
                    Set length: xxxxx<br/>
                    Fee: xxxxx<br/>
                    Promoter: xxxxx<br/>
                </div>

                <img className="emailArtistMSA" src={email} />

            </div>


            
        
        </div>

       
      </div>
    </>
  );
}

export default MyScheduleArtist;
