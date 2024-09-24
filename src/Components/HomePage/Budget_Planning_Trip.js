import React from "react";
import lens from "../../Assets/lens.png";
import Stripe from "../../Assets/3Stripe.svg";
import BPDropdown from "./Dropdowns/BPDropdown-1-Price.js";
import BPDropdown2 from "./Dropdowns/BPDD-TripLen.js";
import BPDropdown3 from "./Dropdowns/BPDD-Location.js";
import BPDropdown4 from "./Dropdowns/BPDD-AgeRange.js";
import BPDropdown5 from "./Dropdowns/BPDD-TourComp.js";
import KeralaHill from "../../Assets/Kerala-Hill.avif";
import Indiagate from"../../Assets/India gate.jpg";
import GoldenTemple from"../../Assets/GoldenTemple.jpg";
import AllIndia from"../../Assets/Entire India.jpg";
const Budget_Planning_Trip = () => {
  return (
    <>
      <div className="text-6xl font-semibold ml-40 mt-24">Budget Planning Trip</div>
      <div className="text-3xl font-light ml-40 mt-2 text-green-500">
        Search Destination
      </div>
      <div className="flex border border-spacing-1 p-3 shadow-lg rounded-full transition ease-in-out duration-300 hover:scale-105 ml-96 mt-10 w-6/12">
        <img src={Stripe} className="w-6 h-6 ml-4 mr-4"></img>
        <input
          placeholder="Search your Destination "
          className="ml-3 w-96 outline-none mr-64 "
        ></input>
        <button>
          <img
            src={lens}
            className="w-6 h-6 ml-46 transition ease-in-out delay-50 hover:-translate-y-1 hover:scale-110 "
            href="#"
          ></img>
        </button>
      </div>
      <div className="flex flexrow">
        <div className="basis-3/12 ml-40 mt-8 text-2xl font-normal">
          <div>Select your preferences</div>
          <div className="font-light text-lg mt-4">
            Search thousands of tours from various tour operators and companies
            to find the right experience for your budget , schedule , and
            intrests
          </div>
          <input
            placeholder="Search"
            className="border border-1 p-2 px-4 rounded-full text-base font-light mt-4 ml-12 border-slate-300"
          ></input>
          <div className="border border-1 border-black mt-6"></div>
          <BPDropdown />
          <BPDropdown2 />
          <BPDropdown3 />
          <BPDropdown4 />
          <BPDropdown5 />
          <button
              href="#"
              className="rounded-full px-16 mt-14 ml-24 bg-blue-400 border border-blue-400 border-1 px-6 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-white hover:text-blue-400 hover:border hover:border-3 transition ease-in-out delay-10 duration-300  hover:border-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Update
            </button>
            <div className="text-center mr-2 font-light text-base mt-2">
                Clear Selections
            </div>
        </div>
        <div className="basis-3/12 ml-4">
        <div className="text-4xl mt-8 ml-14">Tours</div>
          <div className="bg-white w-full mt-6 m-6 ml-10 border border-1 shadow-lg rounded-lg h-96">
            <img
              src={AllIndia}
              className="rounded-lg rounded-b-none h-48 w-96"
            ></img>
            <div className="ml-4 mt-3 text-3xl font-serif">All India Tour Package</div>
            <div className="ml-4 ">By Emerald Cruises</div>
            <div className="flex">
              <div className="text-2xl font-semibold ml-4 font-sans">
                14 Days
              </div>
              <div className="text-2xl font-semibold ml-40 font-sans">
                Rs 75,999
              </div>
            </div>
            <div className="flex">
              <button
                href="#"
                className=" ml-10 mt-6 rounded-l-full bg-white border border-green-500 border-1 px-4 py-2 text-base font-semibold text-green-500 shadow-sm hover:bg-green-500 hover:text-white hover:border hover:border-3 transition ease-in-out delay-10 duration-300  hover:border-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Itenary
              </button>
              <button
                href="#"
                className=" mt-6 rounded-r-full bg-white border border-green-500 border-1 px-4 py-2 text-base font-semibold text-green-500 shadow-sm hover:bg-green-500 hover:text-white hover:border hover:border-3 transition ease-in-out delay-10 duration-300  hover:border-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Dates and Availablity
              </button>
            </div>
          </div>
          <div className="bg-white w-full m-6 ml-10 border border-1 shadow-lg rounded-lg h-96">
            <img
              src={Indiagate}
              className="rounded-lg rounded-b-none h-48 w-96"
            ></img>
            <div className="ml-4 mt-3 text-3xl font-serif">Golden gate Tour</div>
            <div className="ml-4 ">By Emerald Cruises</div>
            <div className="flex">
              <div className="text-2xl font-semibold ml-4 font-sans">
                8 Days
              </div>
              <div className="text-2xl font-semibold ml-40 font-sans">
                Rs 26,999
              </div>
            </div>
            <div className="flex">
              <button
                href="#"
                className=" ml-10 mt-6 rounded-l-full bg-white border border-green-500 border-1 px-4 py-2 text-base font-semibold text-green-500 shadow-sm hover:bg-green-500 hover:text-white hover:border hover:border-3 transition ease-in-out delay-10 duration-300  hover:border-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Itenary
              </button>
              <button
                href="#"
                className=" mt-6 rounded-r-full bg-white border border-green-500 border-1 px-4 py-2 text-base font-semibold text-green-500 shadow-sm hover:bg-green-500 hover:text-white hover:border hover:border-3 transition ease-in-out delay-10 duration-300  hover:border-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Dates and Availablity
              </button>
            </div>
          </div>
        </div>

        <div className="basis-3/12">
        <div className="bg-white w-full ml-20 mt-24 border border-1 shadow-lg rounded-lg h-96">
            <img
              src={KeralaHill}
              className="rounded-lg rounded-b-none h-48 w-96"
            ></img>
            <div className="ml-4 mt-3 text-3xl font-serif">Kerala Tour Package</div>
            <div className="ml-4 ">By Emerald Cruises</div>
            <div className="flex">
              <div className="text-2xl font-semibold ml-4 font-sans">
                11 Days
              </div>
              <div className="text-2xl font-semibold ml-40 font-sans">
                Rs 35,499
              </div>
            </div>
            <div className="flex">
              <button
                href="#"
                className=" ml-10 mt-6 rounded-l-full bg-white border border-green-500 border-1 px-4 py-2 text-base font-semibold text-green-500 shadow-sm hover:bg-green-500 hover:text-white hover:border hover:border-3 transition ease-in-out delay-10 duration-300  hover:border-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Itenary
              </button>
              <button
                href="#"
                className=" mt-6 rounded-r-full bg-white border border-green-500 border-1 px-4 py-2 text-base font-semibold text-green-500 shadow-sm hover:bg-green-500 hover:text-white hover:border hover:border-3 transition ease-in-out delay-10 duration-300  hover:border-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Dates and Availablity
              </button>
            </div>
          </div>
          <div className="bg-white w-full ml-20 mt-6 border border-1 shadow-lg rounded-lg h-96">
            <img
              src={GoldenTemple}
              className="rounded-lg rounded-b-none h-48 w-96"
            ></img>
            <div className="ml-4 mt-3 text-3xl font-serif">Golden Triangle Tour</div>
            <div className="ml-4 ">By Emerald Cruises</div>
            <div className="flex">
              <div className="text-2xl font-semibold ml-4 font-sans">
                7 Days
              </div>
              <div className="text-2xl font-semibold ml-40 font-sans">
                Rs 27,999
              </div>
            </div>
            <div className="flex">
              <button
                href="#"
                className=" ml-10 mt-6 rounded-l-full bg-white border border-green-500 border-1 px-4 py-2 text-base font-semibold text-green-500 shadow-sm hover:bg-green-500 hover:text-white hover:border hover:border-3 transition ease-in-out delay-10 duration-300  hover:border-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                View Itenary
              </button>
              <button
                href="#"
                className=" mt-6 rounded-r-full bg-white border border-green-500 border-1 px-4 py-2 text-base font-semibold text-green-500 shadow-sm hover:bg-green-500 hover:text-white hover:border hover:border-3 transition ease-in-out delay-10 duration-300  hover:border-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Dates and Availablity
              </button>
            </div>
          </div>
        </div>
        
      </div>
    </>
  );
};

export default Budget_Planning_Trip;
