import './signUpPage.scss';
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { loginData } from '../../lib/data';
import Lottie from "lottie-react";
import SignAni from '../../assets/lottie/signup.json';

const SignUpPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signing up with', email, password, confirmPassword);
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