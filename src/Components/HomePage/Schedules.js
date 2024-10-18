import React, { useState } from 'react';

const FlightSearchResults = () => {
  const [selectedFilters, setSelectedFilters] = useState({
    airline: [],
    departureTime: '',
    returnTime: '',
    price: 0
  });

  const handleFilterChange = (filterType, value) => {
    setSelectedFilters({ ...selectedFilters, [filterType]: value });
  };

  const flights = [
    { id: 1, airline: 'IndiGo', time: '14:15', duration: '02 h 45 m', price: 5768, departure: 'Bengaluru', arrival: 'Mumbai' },
    { id: 2, airline: 'IndiGo', time: '18:35', duration: '02 h 15 m', price: 5477, departure: 'Bengaluru', arrival: 'Mumbai' },
    { id: 3, airline: 'IndiGo', time: '08:40', duration: '01 h 55 m', price: 6774, departure: 'Bengaluru', arrival: 'Mumbai' },
    { id: 4, airline: 'IndiGo', time: '12:25', duration: '02 h 05 m', price: 5433, departure: 'Bengaluru', arrival: 'Mumbai' },
    { id: 5, airline: 'SpiceJet', time: '06:25', duration: '03 h 15 m', price: 5286, departure: 'Bengaluru', arrival: 'Mumbai' },
    // Add more flight objects here as needed
  ];

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      {/* Search Section */}
      <div className="bg-white p-4 rounded shadow mb-6">
        <div className="grid grid-cols-1 md:grid-cols-6 gap-4">
          <input type="text" placeholder="From" className="p-2 border rounded" />
          <input type="text" placeholder="To" className="p-2 border rounded" />
          <input type="text" placeholder="Budget" className="p-2 border rounded" />
          <input type="date" className="p-2 border rounded" />
          <input type="date" className="p-2 border rounded" />
          <button className="bg-gray-800 text-white p-2 rounded">GO</button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {/* Filter Section */}
        <div className="col-span-1 bg-white p-4 rounded shadow">
          <h3 className="font-bold mb-4">Filters:</h3>

          {/* Popular Filters */}
          <div className="mb-4">
            <h4 className="font-semibold">Popular Filters:</h4>
            <div className="space-y-2">
              <label>
                <input type="checkbox" className="mr-2" /> Lufthansa
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Morning Departure
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Evening Arrival
              </label>
            </div>
          </div>

          {/* Price Filter */}
          <div className="mb-4">
            <h4 className="font-semibold">Price:</h4>
            <input type="range" min="0" max="10000" className="w-full mt-2" />
            <p className="text-sm text-gray-600">Slide to adjust</p>
          </div>

          {/* Departure and Return Filters */}
          <div className="mb-4">
            <h4 className="font-semibold">Departure:</h4>
            <div className="flex space-x-2">
              <button className="p-2 border rounded">Morning</button>
              <button className="p-2 border rounded">Afternoon</button>
              <button className="p-2 border rounded">Evening</button>
            </div>
          </div>

          <div className="mb-4">
            <h4 className="font-semibold">Return:</h4>
            <div className="flex space-x-2">
              <button className="p-2 border rounded">Morning</button>
              <button className="p-2 border rounded">Afternoon</button>
              <button className="p-2 border rounded">Evening</button>
            </div>
          </div>

          {/* Airline Filter */}
          <div className="mb-4">
            <h4 className="font-semibold">Airlines:</h4>
            <div className="space-y-2">
              <label>
                <input type="checkbox" className="mr-2" /> Maddy Aircrafts
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Air India
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Lufthansa
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Emirates
              </label>
              <label>
                <input type="checkbox" className="mr-2" /> Indigo
              </label>
            </div>
          </div>
        </div>

        {/* Flight Results Section */}
        <div className="col-span-3">
          {flights.map((flight) => (
            <div key={flight.id} className="flex justify-between items-center bg-white p-4 rounded shadow mb-4">
              <div className="flex items-center">
                <img
                  src={`/images/${flight.airline.toLowerCase()}.png`}
                  alt={flight.airline}
                  className="h-12 w-12 mr-4"
                />
                <div>
                  <h4 className="font-bold text-xl">{flight.airline}</h4>
                  <p>{flight.departure} → {flight.arrival}</p>
                </div>
              </div>

              <div>
                <p className="font-semibold">{flight.time}</p>
                <p className="text-gray-500">{flight.duration}</p>
              </div>

              <div className="text-right">
                <p className="font-bold text-xl">₹ {flight.price}</p>
                <button className="bg-green-500 text-white px-4 py-2 rounded">View Prices</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FlightSearchResults;
