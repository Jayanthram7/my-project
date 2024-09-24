import React from 'react'
import suitcase from"../../../Assets/suitcase.svg"

const Dropdown = () => {
  return (
    <div className='mt-6'>
        <div>
      <label htmlFor="price" className="block flex gap-2 text-lg font-normal leading-6 text-gray-900 mt-2 mr-46  mb-2 mt-6"><img src={suitcase} className='w-6 h-6 ml-2'></img>Type of Travel</label>
      <div className="relative mt-1 rounded-md shadow-sm">
        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
          
        </div>
        <input id="price"name="price"type="text"placeholder="Enter the type of trip "className=" outline-none block w-full font-light transition ease-in-out hover:border-orange-300 duration-300 delay-300 rounded-md border-0 py-1.5 pl-4 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6 transition ease-in-out hover:ring-blue-300 duration-300 delay-300"/>
        <div className="absolute inset-y-0 right-0 flex items-center transition ease-in-out hover:ring-orange-300 duration-300 delay-300">
          <label htmlFor="currency" className="sr-only">Currency</label>
          <select id="currency"name="currency"className="outline-none h-full font-light rounded-md border-0 bg-transparent py-0 pl-2 pr-7 text-gray-500 sm:text-sm ring-1 ring-black transition ease-in-out ">
            <option>Adventure</option>
            <option>Leisure</option>
            <option>Family Trip</option>
            <option>Long Vacation</option>
          </select>
        </div>
      </div>
    </div>
    </div>
  )
}

export default Dropdown