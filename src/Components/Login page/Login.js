import React from 'react'
import LoginImage from '../../Assets/Login.png'
import Main from '../HomePage/Main'

const Login = () => {
  return (
    <div className='flex items-center justify-center bg-cover h-screen bg-center' style={{backgroundImage: `url(${LoginImage})`}}>
      <div className='bg-white p-8 rounded-lg shadow-lg max-w-sm w-full'>
        <h1 className='text-2xl font-bold mb-6 text-center'>Trip Tactix</h1>
        <form>
          <div className='mb-4'>
            <label className='block text-gray-700 text-sm font-bold mb-2'>Email</label>
            <input placeholder='Enter mail-id' className='h-full rounded -lg px-2 w-full'></input>
          </div>
          <div className='mb-6'>
            <label className="block text-gray-700 text-sm font-bold mb-2">Password</label>
            <input type='password' placeholder='Enter password' className='h-full w-full rounded-lg px-2'></input>
          </div>
          <button className='bg-black rounded-lg p-1.5 text-white w-full h-full font-bold' href={Main}>Sign In</button>
          <a className="inline-block mt-2 align-baseline font-bold" >Forgot password?</a>
        </form>
        </div>
      </div>
  )
}

export default Login
