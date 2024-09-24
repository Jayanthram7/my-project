import React, { useState } from "react";
import FamilyTravel from "../../Assets/TravelFamily.jpg";
import copy from "../../Assets/copy.svg";

const Collab = () => {
  return (
    <div className="bg-white">
      <div className="relative isolate px-6 lg:px-8">
        
        <div className="mx-52 mt-2 mb-8 py-12 sm:py-48 lg:py-16">
          <div className="sm:flex sm:justify-center mt-8">
            <div className="relative rounded-full px-3 py-1 mb-4 text-sm leading-6 text-gray-600 ring-1 ring-gray-900/10 transition ease-in-out delay-100 duration-300 hover:ring-blue-700">
              Explore the power of AI in Travel.{" "}
              <a href="#" className="font-semibold text-indigo-600">
                <span className="absolute inset-0 text-green-400 " />
                Explore AI <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl mt-5 font-bold tracking-tight text-gray-900 sm:text-6xl">
              Collaborate with Friends,
            </h1>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl">
              and have more Fun.
            </h1>
          </div>
          <div className="flex border border-spacing-1 p-3 mt-11 shadow-lg rounded-full transition ease-in-out duration-300 hover:scale-105 ml-56 mt-1 w-7/12">
            <button>
              <img src={copy} className="w-6 h-6 ml-3 "></img>
            </button>
            <p className="flex ml-3">Copy Link</p>
            <input
              placeholder="Click on Copy Link for a shareable link to Collaborate ."
              className="ml-6 w-96 outline-none "
            ></input>
          </div>

          <div className="flex flex-row">
            <div>
              <p className="mt-12 basis-1/2 text-lg leading-8 text-gray-600">
                Welcome to our collaborative trip planning hub! Whether we're
                dreaming up the perfect getaway or fine-tuning the details, this
                web page is our digital campfire where ideas flourish and plans
                come to life. Together, let's craft unforgettable experiences,
                share must-see destinations, and coordinate every detail
                seamlessly.
              </p>
              <p className="text-3xl mt-8 leading-8 text-gray-600">
                Let the journey begin!
              </p>
            </div>
            <img
              src={FamilyTravel}
              className="basis-1/2 scale-75  mt- rounded-lg"
            ></img>
          </div>

          <div className="mt-10 flex items-center justify-center gap-x-7">
            <a
              href="#"
              className="rounded-md bg-green-500 border border-green-500 border-1 px-6 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-white hover:text-green-500 hover:border hover:border-3 transition ease-in-out delay-10 duration-300  hover:border-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Create new Collab
            </a>
            <a
              href="#"
              className="rounded-md bg-green-500 border border-green-500 border-1 px-6 py-2.5 text-base font-semibold text-white shadow-sm hover:bg-white hover:text-green-500 hover:border hover:border-3 transition ease-in-out delay-10 duration-300  hover:border-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              View Existing Collab
            </a>
            <button
              href="#"
              className="rounded-md bg-white border border-green-500 border-1 px-6 py-2.5 text-base font-semibold text-green-500 shadow-sm hover:bg-green-500 hover:text-white hover:border hover:border-3 transition ease-in-out delay-10 duration-300  hover:border-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Collab Requests
            </button>
            <a
              href="#"
              className="text-base font-semibold leading-6 text-gray-900 transition ease-in-out delay-100 duration-300 hover:scale-110 hover:text-blue-500"
            >
              Invite <span>→</span>
            </a>
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Collab;
