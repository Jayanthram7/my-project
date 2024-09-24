import React from "react";
import LoginImage from "../../Assets/login2.png";

const Login2 = () => {
  return (
    <div className="bg-slate-200 w-full h-full">
      <div className="text-xl  ml-4 pt-2">Signup</div>
      <div className="flex flexrow border bg-white m-8 border-bg-black rounded-lg">
        <div className="basis-1/2 scale-110 mt-8 ml-10">
          <img src={LoginImage}></img>
        </div>
        <div className="basis-1/2 text-6xl font-bold mt-32">
          PROMPTPIE
          <div class="mt-6">
                <label
                  for="last-name"
                  class="block text-lg mr-60 mb-2 font-normal leading-6 text-gray-900"
                >
                  First name
                </label>
                <input
                  placeholder=""
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  class="outline-none font-thin text-base block w-7/12 rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition ease-in-out hover:ring-blue-300 duration-300 delay-300 placeholder:text-gray-400 "
                ></input>
                </div>
                <div class="mt-6">
                <label
                  for="last-name"
                  class="block text-lg mr-60 mb-2 font-normal leading-6 text-gray-900"
                >
                  Email Address
                </label>
                <input
                  placeholder=""
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  class="outline-none font-thin text-base block w-7/12 rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition ease-in-out hover:ring-blue-300 duration-300 delay-300 placeholder:text-gray-400 "
                ></input>
                </div>
                <div class="mt-6">
                <label
                  for="last-name"
                  class="block text-lg mr-60 mb-2 font-normal leading-6 text-gray-900"
                >
                  Password
                </label>
                <input
                  placeholder=""
                  type="text"
                  name="last-name"
                  id="last-name"

                  class="outline-none font-thin text-base block w-7/12 rounded-md border-0 px-3.5 py-2  text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 transition ease-in-out hover:ring-blue-300 duration-300 delay-300 placeholder:text-gray-400 "
                ></input>
                </div>
                <button className='rounded-md bg-cyan-300 text-black w-44 h-10 ml-3 mt-4 ml-32 mb-2 text-sm font-normal'>Sign Up</button>
                <div className="flex flexrow">
                    <div className="text-sm font-bold mt-4 ml-24 text-right">
                        Already Have an Account ?
                    </div>
                    <button className="text-sm font-bold mt-4 text-left text-blue-600 ml-4">
                        Login
                    </button>
                </div>
        </div>
        
      </div>
    </div>
  );
};

export default Login2;
