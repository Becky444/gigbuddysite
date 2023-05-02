import { useState } from 'react';
import "./SignIn1.css";
import Header from '../components/Header';
import { Button } from '../components/Button';


function SignIn1 (){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const handleLogin = async (event) => {
        event.preventDefault();
        console.log(email);
        console.log(password);
        const response = await fetch('http://localhost:5000/api/login', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ email, password }),
        });

        const data = await response.json();

        if (response.ok) {
          // Login successful, store the token in localStorage and redirect to home page
          localStorage.setItem('token', data.token);
          window.location.href = '/artistprofile';
        } else {
          // Login failed, display error message
          if (data.message) {
            setErrorMessage(data.message);
          } else {
            setErrorMessage('An error occurred during login. Please try again.');
          }
        }
    };

    return ( 
        <>
        
        <div>
        <Header/>
        </div>

        <div className='fullPage'>

        <div className='leftPanelSignIn'>
        <div className='signInText'>
            <h1 className='signInTitle'>Welcome back!</h1>
        </div>
        </div>
        <div className='rightPanelSignIn'>


            <form className='signInForm' onSubmit={handleLogin}>
            <label className='label'>
                Email:
                <input className='input' type="text" name="email" value={email} onChange={(event) => setEmail(event.target.value)} />
            </label>
            <label className='label'>
                Password:
                <input className='input' type="password" name="password" value={password} onChange={(event) => setPassword(event.target.value)} />
            </label>
            <Button type="submit">Login</Button>
            </form>

    
        </div>
        </div>
        </>

    )
}

export default SignIn1;
