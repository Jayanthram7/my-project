import React, { useState } from "react";

const TrainBusFlight = () => {
  const [selectedTab, setSelectedTab] = useState("Flights");

  return (
    <div className="min-h-screen bg-gradient-to-b from-green-400 to-blue-500 flex justify-center items-center">
      <div className="bg-white bg-opacity-20 p-10 rounded-lg shadow-lg w-full max-w-2xl">
        <h1 className="text-3xl text-center font-bold text-white mb-6">TripTactiX</h1>

        <div className="flex justify-around bg-white bg-opacity-40 rounded-md mb-4">
          {["Flights", "Trains", "Bus"].map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedTab(tab)}
              className={`px-6 py-2 font-semibold text-white ${
                selectedTab === tab ? "bg-opacity-50 bg-black" : "bg-opacity-20"
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <form className="grid grid-cols-2 gap-4">
          <div className="col-span-2 flex flex-col">
            <label className="text-white font-semibold mb-1">From:</label>
            <input
              type="text"
              placeholder="Enter from destination"
              className="p-2 rounded bg-white bg-opacity-70"
            />
          </div>

          <div className="col-span-2 flex flex-col">
            <label className="text-white font-semibold mb-1">To:</label>
            <input
              type="text"
              placeholder="Enter to destination"
              className="p-2 rounded bg-white bg-opacity-70"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white font-semibold mb-1">Departure date:</label>
            <input
              type="date"
              className="p-2 rounded bg-white bg-opacity-70"
            />
          </div>

          <div className="flex flex-col">
            <label className="text-white font-semibold mb-1">Return date:</label>
            <input
              type="date"
              className="p-2 rounded bg-white bg-opacity-70"
            />
          </div>

          <div className="col-span-2 flex flex-col">
            <label className="text-white font-semibold mb-1">Budget:</label>
            <input
              type="text"
              placeholder="Enter your budget"
              className="p-2 rounded bg-white bg-opacity-70"
            />
          </div>

          <div className="col-span-2 flex justify-center">
            <button
              type="submit"
              className="px-6 py-3 bg-teal-500 text-white font-semibold rounded-lg shadow-lg"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TrainBusFlight;
