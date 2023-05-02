
import "./ArtistSignUp.css";
import Header from '../components/Header';
import { Button } from '../components/Button';
import React, { useState } from 'react';

// initialising state variable of form & setForm updates the state  
function ArtistSignUp() {
    const [form, setForm] = useState({
      email: '',
      password: '',
      name: '',
      town: ''
    });

        // handle change function to update form state 
        const handleChange = (e) => {
            setForm({
              ...form,
              [e.target.name]: e.target.value
            });
          }

        // sending post request to sign up endpoint with data from form 
        const handleSubmit = async (e) => {
        e.preventDefault();
        const response = await fetch('http://localhost:5000/api/signup', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(form)
        });
        
        //logging response and redirecting to home page 
        const data = await response.json();
        console.log(data);
      // Redirect to home page after successful registration
      if (response.ok) {
        window.location.assign('/');
      }
    };


    return ( 
        <>

        <div>
        <Header/>
        </div>

        <div className='fullPage'>

        <div className="leftPanelArtist">
        <div className="artistSignUpText">
        <h1 className='SignUpTitleArtist'>Register as a GigBuddy NI artist and discover new opportunities!</h1>
        
        </div>
        </div>
        <div className='rightPanelArtist'>
            <h1 className='signUpTitleArtist2'>Sign Up</h1>
            <p className="tandcs">By signing up to GigBuddy, you are agreeing to our <a href="/termsandconditions">T&Cs</a> and <a href="/privacypolicy">Privacy Policy</a></p>

            <form className='artistForm' onSubmit={handleSubmit}>
                <label className='label'>
                    Email:
                    <input type="email" id="email" name="email" className='input' value={form.email} onChange={handleChange}/>
                </label>
                <label className='label'>
                    Password:
                    <input type="password" id="password" name="password" className='input' value={form.password} onChange={handleChange}/>
                </label >
                <label className='label'>
                    Artist Name:
                    <input type="name" id="name" name="name" className='input' value={form.name} onChange={handleChange}/>
                </label>
                <label className='label'>
                    Town:
                    <input type="town" id="town" name="town" className='input' value={form.town} onChange={handleChange}/>
                </label>
                <Button className='submit'>Submit</Button>
            </form>
   

        </div>


        </div>
        </>
    )
}

export default ArtistSignUp;