import React from 'react'
import bed from "../../Assets/Hotel.svg"
import fork from"../../Assets/restaurant.svg"
import house from"../../Assets/Home.svg"
import vacation from"../../Assets/Vacations.svg"
import todo from"../../Assets/todo.svg"
import Budget from"../../Assets/Budget.svg"
import lens from"../../Assets/lens.png"
import Stripe from"../../Assets/3Stripe.svg"

const Menubar = () => {
  return (
    <>
    <div className="flex mt-14 ml-80 pl-10 ">

        <div className='flex transition ease-in-out hover:text-green-500 hover:-translate-y-1 hover:scale-110 duration-300 ...'>
        <img src={house} className="w-6 h-8 "></img>
        <h1 className="pl-1.5 mt-1">Search All</h1>
        </div>
        <div className='flex transition ease-in-out hover:text-green-500 hover:-translate-y-1 hover:scale-110 duration-300 ...'>
        <img src={bed} className="w-6 h-8 ml-10"></img>
        <h1 className="pl-1.5 mt-1">Hotels</h1>
        </div>
        <div className='flex transition ease-in-out hover:text-green-500 hover:-translate-y-1 hover:scale-110 duration-300 ...'>
        <img src={todo} className="w-6 h-8  ml-10"></img>
        <h1 className="pl-1.5 mt-1">Things to do </h1>
        </div>
        <div className='flex transition ease-in-out hover:text-green-500 hover:-translate-y-1 hover:scale-110 duration-300 ...'>
        <img src={fork} className="w-6 h-8  ml-10"></img>
        <h1 className="pl-1.5 mt-1">Restaurants </h1>
        </div>
        <div className='flex transition ease-in-out h-8 hover:text-green-500 hover:-translate-y-1 hover:scale-110 duration-300 ...'>
        <img src={vacation} className="w-6 h-8  ml-10"></img>
        <h1 className="pl-1.5 mt-1">Vacations</h1>
        </div>
        <div className='flex transition ease-in-out hover:-translate-y-1 hover:scale-110 hover:border-2 hover:border-black duration-300 flex bg-green-100 rounded-full h-8 ml-10 '>
        <div className='flex  h-6 ml-1 mt-1 hover:-translate-y-1 hover:mt-1.5 '>
        <img src={Budget} className=""></img>
        <h1 className="pl-1.5 pr-3 ">Budget</h1></div>
        </div>
        
    </div>
    <div className="flex border border-spacing-1 p-3 shadow-lg rounded-full transition ease-in-out duration-300 hover:scale-105 ml-60 mt-10 w-8/12">
        <img src={Stripe} className='w-6 h-6 ml-4 mr-4'></img>
        <input placeholder='Places to go , Things to do , Search for More ...'className="ml-3 w-96 outline-none mr-64 "></input>
        <button><img src={lens} className="w-6 h-6 ml-60 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 " href="#"></img></button>
    </div>
    
    </>
  )
}

export default Menubar