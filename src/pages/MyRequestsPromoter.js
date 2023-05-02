import React, { Component } from "react";
import "./MyRequestsPromoter.css";
import Header2 from "../components/Header2";
import { Button } from "../components/Button";
import ticksquare from "../images/ticksquare.png";
import email from "../images/email.png";
import closesquare from "../images/closesquare.png";

function MyRequestsPromoter() {
  return (
    <>
      <div>
        <Header2 />
      </div>

      <div className="gridContainerMRP">
        <div className="profileTitleMRP">
          <h1>Joe Bloggs | My Requests</h1>
        </div>

        <div className="subtitleMRP">
          <h2>Events</h2>
        </div>

        <div className="eventsAndCollabsMRP">
          <div className="eventPicMRP"></div>

          <div className="eventDetailsMRP">
            Event: xxxxx <br />
            Date: xxxxx <br />
            Set length: xxxxx
            <br />
            Fee: xxxxx
            <br />
            Promoter: xxxxx
            <br />
          </div>

          <div className="capDetailsMRP">
            Capacity: xxxx <br />
            Average fee based on capactiy: xxxxx <br />
          </div>

          {/* <div className="accept"></div>
            <div className="reject"></div>
            <div className="emailpromoter"></div> */}

          <div className="statusMRP">Status: Pending</div>
          <img className="emailpromoterMRP" src={email} />
        </div>

        <div className="eventsAndCollabsMRP">
          <div className="eventPicMRP"></div>

          <div className="eventDetailsMRP">
            Event: xxxxx <br />
            Date: xxxxx <br />
            Set length: xxxxx
            <br />
            Fee: xxxxx
            <br />
            Promoter: xxxxx
            <br />
          </div>

          <div className="capDetailsMRP">
            Capacity: xxxx <br />
            Average fee based on capactiy: xxxxx <br />
          </div>

          {/* <div className="accept"></div>
  <div className="reject"></div>
  <div className="emailpromoter"></div> */}

          <div className="statusMRP">Status: Pending</div>
          <img className="emailpromoterMRP" src={email} />
        </div>

        {/* <div className="subtitleMRP">
          <h2>Collaborations</h2>
        </div>

        <div className="eventsAndCollabsMRP">

            <div className="eventPicMRP"></div>

            <div className="eventDetailsMRP">
                Musician: xxxxx <br/>
                Date: xxxxx <br/>
                Location: xxxxx<br/>  
                Fee: xxxxx<br/>
                Description: xxxxx<br/>
            </div>


            <img className="accept2MRP" src={ticksquare} /> 
            <img className="reject2MRP" src={closesquare} />
            <img className="emailpromoter2MRP" src={email} />

        
        </div> */}
      </div>
    </>
  );
}

export default MyRequestsPromoter;
