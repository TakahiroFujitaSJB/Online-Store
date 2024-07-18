import './signUpPage.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Lottie from "lottie-react";
import SignAni from '../../assets/lottie/signup.json';

const SignUpPage = ({ addUser }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      alert('Passwords do not match');
      return;
    }
    const newUser = 
    { email: email, 
      password: password
    };
    console.log(newUser);
    addUser(newUser);
    setEmail('');
    setPassword('');
    setConfirmPassword('');
    alert('Verification mail has been sent! Please verify before attempting login (no mail was sent actually)');
    navigate('/');
  };




  return (
    <div className='signUpPage'>
      <div className='wrapper'>
          <div className='animation'>
              <Lottie animationData={SignAni} />
          </div>
          <div className='form'>
            <h1>Sign up</h1>
              <form onSubmit={handleSubmit}>
                <label>Email:</label>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
                <label>Password:</label>
                <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
                <label>Confirm Password:</label>
                <input type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
                <button type="submit">Register!</button>
              </form>
          </div>
      </div>
    </div>
  );
};

export default SignUpPage;