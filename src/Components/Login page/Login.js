import React, { useEffect, useState } from 'react';
import LoginImage from '../../Assets/Login.png';
import Main from '../HomePage/Main';
import { auth, provider } from "../Google SignIn/config";
import { signInWithPopup } from "firebase/auth";
import google from "../../Assets/google.png"
import Triptactix from"../../Assets/logo3.png"


function Login() {
  const [value, setValue] = useState('');

  const handleClick = (e) => {
    e.preventDefault(); // Prevent form submission
    signInWithPopup(auth, provider)
      .then((data) => {
        setValue(data.user.email);
        localStorage.setItem("email", data.user.email);
      })
      .catch((error) => {
        console.error("Error signing in:", error); // Log any sign-in errors
      });
  };

  useEffect(() => {
    const savedEmail = localStorage.getItem('email');
    setValue(savedEmail); // Set the saved email from localStorage
  }, []);

  return (
    <div className='flex items-center justify-center bg-cover h-screen bg-center' style={{ backgroundImage: `url(${LoginImage})` }}>
      <div className='bg-white p-8 rounded-md shadow-lg max-w-sm w-full'>
        <h1 className=' flex text-2xl font-bold mb-6 text-center justify-center items-center'><img src={Triptactix} className='w-12 h-12 mr-2'></img>Trip Tactix</h1>
        <form>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
            <input placeholder='Enter mail-id' className='h-full rounded-lg px-2 w-full'></input>
          </div>
          <div className='mb-6'>
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input type='password' placeholder='Enter password' className='h-full w-full rounded-lg px-2'></input>
          </div>
          
            <button className='bg-white border border-slate-800 items-center justify-center flex rounded-lg p-1.5 text-black w-full h-full font-semibold' onClick={handleClick}><img src={google}className='w-6 h-6 mr-3'></img>Sign In with Google</button>
          
        
          <a className="flex w-48 bg-black text-white ml-14 mt-6 border rounded p-1 px-2 items-center justify-center font-bold" href="#">Forgot password?</a>
        </form>
      </div>
    </div>
  );
}

export default Login;
