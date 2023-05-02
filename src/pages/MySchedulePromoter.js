import React, { Component } from "react";
import "./MySchedulePromoter.css";
import Header2 from "../components/Header2";
import { Button } from "../components/Button";
import MapsicleMap from "../images/MapsicleMap.png";
import email from "../images/email.png";    


function MySchedulePromoter() {
  return (
    <>
      <div>
        <Header2 />
      </div>

      <div className="gridContainerMSP">
        <div className="profileTitleMSP">
          <h1>Joe Bloggs | My Schedule</h1>
        </div>

        <div className="mapMSP">
        <img className="MapsicleMap" src={MapsicleMap} />
        </div>

        <div className="eventsPanelMSP">

            <div className="eventsAndCollabsMSP">
                
                <div className="eventPicMSP"></div> 

                <div className="eventDetailsMSP">
                    Event: xxxxx <br/>
                    Date: xxxxx <br/>
                    Set length: xxxxx<br/>
                    Fee: xxxxx<br/>
                    Promoter: xxxxx<br/>
                </div>

                <img className="emailArtistMSP" src={email} />

            </div>

            <div className="eventsAndCollabsMSP">
                
                <div className="eventPicMSP"></div> 

                <div className="eventDetailsMSP">
                    Event: xxxxx <br/>
                    Date: xxxxx <br/>
                    Set length: xxxxx<br/>
                    Fee: xxxxx<br/>
                    Musician proposed: xxxxx<br/>
                </div>

                <img className="emailArtistMSP" src={email} />

            </div>

            <div className="eventsAndCollabsMSP">
                
                <div className="eventPicMSP"></div> 

                <div className="eventDetailsMSP">
                    Event: xxxxx <br/>
                    Date: xxxxx <br/>
                    Set length: xxxxx<br/>
                    Fee: xxxxx<br/>
                    Promoter: xxxxx<br/>
                </div>

                <img className="emailArtistMSP" src={email} />

            </div>

            <div className="eventsAndCollabsMSP">
                
                <div className="eventPicMSP"></div> 

                <div className="eventDetailsMSP">
                    Event: xxxxx <br/>
                    Date: xxxxx <br/>
                    Set length: xxxxx<br/>
                    Fee: xxxxx<br/>
                    Promoter: xxxxx<br/>
                </div>

                <img className="emailArtistMSP" src={email} />

            </div>

            
        
        </div>

       
      </div>
    </>
  );
}

export default MySchedulePromoter;
