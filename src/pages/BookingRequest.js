import React, { useState } from 'react';
import "./BookingRequest.css";
import Header2 from "../components/Header2";
import { Button } from "../components/Button";
import MapsicleMap from "../images/MapsicleMap.png";
import email from "../images/email.png";    

function BookingRequest() {
  const [email, setEmail] = useState('');
  const [date, setDate] = useState('');
  const [venue, setVenue] = useState('');
  const [capacity, setCapacity] = useState('');
  const [length, setLength] = useState('');
  const [fee, setFee] = useState('');
  const [info, setInfo] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    fetch('http://localhost:5000/api/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        email,
        date,
        venue,
        capacity,
        length, 
        fee, 
        info

      })
    })
      .then(response => {
        if (response.ok) {
          console.log('Email sent successfully');
        } else {
          console.log('Error sending email');
        }
      })
      .catch(error => {
        console.log('Error sending email:', error);
      });
  };

// function BookingRequest() {
  return (
    <>
      <div>
        <Header2 />
      </div>

      <div className="gridContainerBR">

      <div className="profileTitleMRA">
          <h1>Booking request</h1>
        </div>

        <form className="bookingRequestFormBR" onSubmit={handleSubmit}>

            <label htmlFor="eventBR">Email:</label>
            <input type="text" id="email" name="email" value={email} onChange={event => setEmail(event.target.value)} required/><br></br>

            <label htmlFor="dateBR">Date:</label>
            <input type="text" id="date" name="date" value={date} onChange={event => setDate(event.target.value)} required/><br></br>

            <label htmlFor="venueBR">Venue:</label>
            <input type="text" id="venue" name="venue" value={venue} onChange={event => setVenue(event.target.value)} required/><br></br>


            <label htmlFor="capacityBR">Capacity:</label>
            <input type="text" id="capacity" name="capacity" value={capacity} onChange={event => setCapacity(event.target.value)} required/><br></br>

            <label htmlFor="setLengthBR">Set length:</label>
            <input type="text" id="length" name="length" value={length} onChange={event => setLength(event.target.value)} required/><br></br>

            <label htmlFor="proposedFeeBR">Proposed fee:</label>
            <input type="text" id="fee" name="fee" value={fee} onChange={event => setFee(event.target.value)} required/><br></br>

            <label htmlFor="infoBR">Info:</label>
            <input type="text" id="info" name="info" value={info} onChange={event => setInfo(event.target.value)} required/><br></br>

            <Button type="submit">Send</Button>

        </form>


        
      </div>
    </>
  );
}

export default BookingRequest;