import React, { Component } from "react";
import "./MyRequestsArtist.css";
import Header2 from "../components/Header2";
import { Button } from "../components/Button";
import ticksquare from "../images/ticksquare.png";
import email from "../images/email.png";
import closesquare from "../images/closesquare.png";

function MyRequestsArtist() {
  return (
    <>
      <div>
        <Header2 />
      </div>

      <div className="gridContainer">
        <div className="profileTitleMRA">
          <h1>Becky McNeice | My Requests</h1>
        </div>

        <div className="subtitleMRA">
          <h2>Events</h2>
        </div>

        <div className="eventsAndCollabsMRA">

            <div className="eventPicMRA"></div>

            <div className="eventDetailsMRA">
                Event: xxxxx <br/>
                Date: xxxxx <br/>
                Set length: xxxxx<br/>
                Fee: xxxxx<br/>
                Promoter: xxxxx<br/>
            </div>
                        
            <div className="capDetailsMRA">
                Capacity: xxxx <br/>
                Average fee based on capactiy: xxxxx <br/>
            </div>

            {/* <div className="accept"></div>
            <div className="reject"></div>
            <div className="emailpromoter"></div> */}

            <img className="acceptMRA" src={ticksquare} /> 
            <img className="rejectMRA" src={closesquare} />
            <img className="emailpromoterMRA" src={email} />

        
        </div>

        <div className="subtitleMRA">
          <h2>Collaborations</h2>
        </div>

        <div className="eventsAndCollabsMRA">

            <div className="eventPicMRA"></div>

            <div className="eventDetailsMRA">
                Musician: xxxxx <br/>
                Date: xxxxx <br/>
                Location: xxxxx<br/>
                Fee: xxxxx<br/>
                Description: xxxxx<br/>
            </div>
{/*                         
            <div className="capDetails">
                Capacity: xxxx <br/>
                Average fee based on capactiy: xxxxx <br/>
            </div> */}

            {/* <div className="accept"></div>
            <div className="reject"></div>
            <div className="emailpromoter"></div> */}

            <img className="accept2MRA" src={ticksquare} /> 
            <img className="reject2MRA" src={closesquare} />
            <img className="emailpromoter2MRA" src={email} />

        
        </div>

      </div>
    </>
  );
}

export default MyRequestsArtist;
