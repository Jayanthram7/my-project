import React from "react";
import location from "../../Assets/location.svg";
import iphone from "../../Assets/iphone3.png";
import Details from "../../Assets/Userdetails.svg";
import Dropdown1 from "./Dropdowns/Dropdown1";
import Dropdown2 from "./Dropdowns/Dropdown2";
import Dropdown3 from "./Dropdowns/Dropdown3";
import Dropdown4 from "./Dropdowns/Dropdown4";
import Team from "./Team";


const Content = () => {
  return (
    <>
      <div>
      
        <div className="grid grid-cols-7 ">
          <div className="card col-span-4  text-white rounded-xl delay-100 duration-700 bg-gradient-to-r from-green-400 via-cyan-500 to-blue-400 bg-size-200 bg-pos-0 hover:bg-pos-100 rounded-lg ml-40 mt-14 mb-40 h-96 text-center text-3xl font-bold text-white ">
            
            <h1 className="pt-16">Your AI Powered</h1>
            <h1 className="text-7xl mt-30">Tour Guide</h1>
            <h2 className="font-light pl-16 pr-16 text-2xl mt-5">
              Get personalized itenary just for you , guided by AI and your
              preferences
            </h2>
            
            <button className="flex ml-60 mt-8 text-lg border border-spacing-2 border-2 rounded-lg p-1 pl-4 pr-4 transition ease-in-out delay-150 hover:-translate-y-1 hover:scale-110 duration-300 ...">
              <img src={location} className="h-6 w-6 mr-2"></img>Start Trip with
              AI
            </button>
            <h1 className="pt-20 text-4xl flex text-black mb-6 mr-4">
              <img
                src={Details}
                className="w-8 h-8 relative top-9 left-48 right-0"
              ></img>
              <div className="text-center ml-52 mt-7">
                Enter your
              </div>
              <div className=" text-green-400 ml-3 mt-7">
                Details
              </div>
            </h1>
            
            <div className="z-50 grid grid-cols-2 mt-3 gap-x-8 gap-y-4 sm:grid-cols-2">
              <div class="mt-6">
                <label
                  for="first-name"
                  class=" z-5 block text-lg mr-60 mb-1 font-normal leading-6 text-gray-900"
                >
                  First name
                </label>
                <input
                  placeholder="Enter your First name"
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  class=" outline-none block w-full rounded-md border-0 px-3.5 py-2 font-thin text-base text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition ease-in-out hover:ring-blue-300 duration-300 delay-300 placeholder:text-gray-400 "
                ></input>
                <Dropdown1/>
                <Dropdown3/>
              </div>
              <div class="mt-6">
                <label
                  for="last-name"
                  class="block text-lg mr-60 mb-1 font-normal leading-6 text-gray-900"
                >
                  Last name
                </label>
                <input
                  placeholder="Enter your Last name"
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  class="outline-none font-thin text-base block w-full rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition ease-in-out hover:ring-blue-300 duration-300 delay-300 placeholder:text-gray-400 "
                ></input>
                <Dropdown2/>
                <Dropdown4/>
                
              </div>
              
            </div>
            <button
              href="#"
              className="rounded-md mt-20 bg-green-500 border border-green-500 border-1 px-6 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-green-600 hover:text-white hover:border hover:border-3 transition ease-in-out delay-10 duration-300  hover:border-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 font-mono"
            >
              Save Information
            </button>
          </div>
          <div className='col-span-3 ml-10 mr-40 mt-10 bg-fixed '>
            <img src={iphone} className="w-full mt-2 "></img>
          </div>
        </div>
      </div>
      
    </>
  );
};

export default Content;
