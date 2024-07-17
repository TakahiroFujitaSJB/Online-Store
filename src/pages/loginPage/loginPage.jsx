import './loginPage.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
// import { loginData } from '../../lib/data';
import Lottie from "lottie-react";
import LogAni from '../../assets/lottie/login.json';


const LoginPage = ({users}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();


  const handleSubmit = (e) => {
    e.preventDefault();
    const user = users.find((user) => user.email === email && user.password === password);

    if (user) {
        alert('Login successful');
        navigate('/');
      } else {
        alert('Invalid email or password');
      }
    };

  return (
    <div className='loginPage'>
        <div className='wrapper'>
            <div className='form'>
                <h1>Log In</h1>
                <form onSubmit={handleSubmit}>
                    <input type="email" placeholder=' Email' value={email} onChange={(e) => setEmail(e.target.value)} required />
                    <input type="password" placeholder=' Password' value={password} onChange={(e) => setPassword(e.target.value)} required />
                    <button type="submit">Login</button>
                </form>
            </div>
            <div className='animation'>
                <Lottie animationData={LogAni} />
            </div>
        <div>
        
        
        </div>
        
            
      </div>
    </div>
  );
};

export default LoginPage;