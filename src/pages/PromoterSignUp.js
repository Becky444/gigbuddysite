import React, { useState } from 'react';
import "./PromoterSignUp.css";
import Header2 from '../components/Header2';
import { Button } from '../components/Button';

// initialising state variable of form & setForm updates the state  
function PromoterSignUp() {
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
        <Header2/>
      </div>

      <div className='fullPage'>

        <div className="leftPanelPromoter">
          <div className="promoterSignUpText">
            <h1 className='SignUpTitlePromoter'>Register as a GigBuddy NI promoter and discover local musicians!</h1>
          </div>
        </div>

        <div className='rightPanelPromoter'>
          <h1 className='signUpTitlePromoter2'>Sign Up</h1>
          <p className="tandcs">By signing up to GigBuddy, you are agreeing to our <a href="/termsandconditions">T&Cs</a> and <a href="/privacypolicy">Privacy Policy</a></p>

          <form className='promoterForm' onSubmit={handleSubmit}>
            <label className='label'>
              Email:
              <input type="email" id="email" name="email" className='input' value={form.email} onChange={handleChange}/>
            </label>

            <label className='label'>
              Password:
              <input type="password" id="password" name="password" className='input' value={form.password} onChange={handleChange}/>
            </label>

            <label className='label'>
              Promoter Name:
              <input type="name" id="name" name="name" className='input' value={form.name} onChange={handleChange}/>
            </label>

            <label className='label'>
              Town:
              <input type="town" id="town" name="town" className='input' value={form.town} onChange={handleChange}/>
            </label>

            <Button type="submit">Submit</Button>
          </form>
        </div>
      </div>
    </>
  )
}

export default PromoterSignUp;
