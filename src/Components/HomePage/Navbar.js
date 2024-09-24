import React from 'react'
import logo from '../../Assets/logo.png'
import logo1 from '../../Assets/Logo1.png'
import logo2 from '../../Assets/logo2.png'
import logo3 from '../../Assets/logo3.png'
import Loginlogo from '../../Assets/Loginlogo.svg'


const Navbar = () => {
  return (
    <>
    <div className=" flex pt-4 pl-20 border-b fixed bg-white top-0 z-50 transition ease-in-out hover:text-green-500  duration-300 shadow-md w-full">

        <img src={logo3} className="w-11 h-10  rounded-lg "></img>
        <h1 className="font-bold text-2xl pl-5 transition ease-in-out mt-1">TripTactiX</h1>
        <h1 className='font-regular mt-2 ml-80 transition ease-in-out hover:-translate-y-1 '>Population</h1>
        <h1 className='font-regular mt-2 ml-10 transition ease-in-out hover:-translate-y-1'>Discover</h1>
        <h1 className='font-regular mt-2 ml-10 transition ease-in-out hover:-translate-y-1'>Trips</h1>
        <h1 className='font-regular mt-2 ml-10 transition ease-in-out hover:-translate-y-1'>Review</h1>
        <h1 className='font-regular mt-2 ml-10 transition ease-in-out hover:-translate-y-1'>More</h1>
        <img src={Loginlogo} className='w-10 h-10 ml-80 rounded-full mt-1 transition ease-in-out '></img>
        <button className='rounded-full bg-black text-white w-20 h-10 ml-3 mt-1 transition ease-in-out delay-150 bg-black hover:bg-green-500 duration-500 ... mb-2'>Sign In</button>
    </div>
   
    <h1 className='font-bold  flex text-center text-6xl mt-40 drop-shadow-* drop-shadow-2xl ml-96'>
      <div className='text-center text-3xl ml-28 font-mono'>
        Looking for a Trip ?
      </div>
      <div className='text-green-400 text-3xl ml-4 font-mono'>
        We got you
      </div>
     
    </h1>
    <div className='text-8xl text-center font-bold text-green-400'>
        Destination.
      </div>
    </>
  )
}

export default Navbar