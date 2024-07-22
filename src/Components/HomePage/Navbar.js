import React from 'react'
import logo from '../../Assets/logo.png'
import Loginlogo from '../../Assets/Loginlogo.svg'


const Navbar = () => {
  return (
    <>
    <div className=" flex pt-4 pl-20 border-b ">

        <img src={logo} className="w-10 h-10 bg-green-400 rounded-full"></img>
        <h1 className="font-bold text-2xl pl-5 transition ease-in-out hover:text-green-500 mt-1 duration-500">TripTactiX</h1>
        <h1 className='font-regular mt-2 ml-80 transition ease-in-out hover:-translate-y-1 '>Population</h1>
        <h1 className='font-regular mt-2 ml-10 transition ease-in-out hover:-translate-y-1'>Discover</h1>
        <h1 className='font-regular mt-2 ml-10 transition ease-in-out hover:-translate-y-1'>Trips</h1>
        <h1 className='font-regular mt-2 ml-10 transition ease-in-out hover:-translate-y-1'>Review</h1>
        <h1 className='font-regular mt-2 ml-10 transition ease-in-out hover:-translate-y-1'>More</h1>
        <img src={Loginlogo} className='w-10 h-10 ml-80 rounded-full mt-1 transition ease-in-out '></img>
        <button className='rounded-full bg-black text-white w-20 h-10 ml-3 mt-1 transition ease-in-out delay-150 bg-black hover:bg-green-500 duration-500 ... mb-2'>Sign In</button>
    </div>
    
    <h1 className='font-bold text-center text-5xl mt-16 drop-shadow-* drop-shadow-2xl  '>Destination </h1>
    </>
  )
}

export default Navbar