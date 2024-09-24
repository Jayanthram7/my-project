import React from "react";
import advertisement from "../../Assets/Advertisement.png";
import Darjeeling from "../../Assets/darjeeling.jpg";
import Goa from "../../Assets/Goa.jpg";
import ooty from "../../Assets/ooty.jpg";
import arrow from"../../Assets/ArrowUP.svg"

const PopulationAnalysis = () => {
  return (
    <div>
      <>
        <div className="flex">
          <div className="text-6xl font-semibold ml-40">Population</div>
          <div className="text-6xl font-semibold ml-4 text-green-500">
            Analysis .
          </div>
        </div>
        <div className="flex flexrow">
          <div className="basis-6/12 ml-40 font-light text-xl mt-10 ">
            The Population parameter in touring cities refers to the number of
            residents and tourists present at any given time . It significantly
            impacts crowd levels , wait times , and the overall tourist
            experience . High population influxes can lead to increased
            accomodation costs , limioted availablity and strained
            infrastrucutre during peak seasons . Travelers who understand these
            variations can plan trips to avoid overcrowded periods and optimize
            their budget and comfort . The paramter also influences the level of
            cultural interaction and overall atmosphere of a destination
          </div>
          <div className="basis-4/12 text-5xl mr-32 ml-12 text-white bg-green-500 rounded-lg px-10 py-6 font-bold font-mono">
            Advertise and Connect to - Customers
            <button className="text-green-500 ml-24 bg-white rounded-full px-4 py-2 font-mono text-center  text-base">
              Contact to Advertise
            </button>
          </div>
        </div>
        <div className="flex flexrow ml-40 border border-1 rounded-lg mr-40 mt-12">
          <div className="basis-2/12">
            <img src={Goa} className="w-48 rounded-md"></img>
          </div>
          <div className="basis-7/12 ">
            <div className="flex">
              <div className="text-3xl font-bold ml-4 mt-2">1. Goa</div>
              <div className="text-3xl font-light  ml-2 mt-2"> , India</div>
              <div className="text-3xl font-semibold  ml-44 mt-2 text-orange-400">
                Increasing Crowd
              </div>
            </div>
            <div className=" text-sm ml-4 mt-2 mr-2">
                Goa , Located on the western coast of india , is known for its stunning beaches , vibrant nightlife , rich portugese heritage , and laid back atmosphere . It's a popular tourist destination offering a blend of natural beauty . cultural experiences and adventure.
            </div>
          </div>
          <div className="basis-4/12 border rounded-lg border-black">
            <div className="text-xl text-center mt-3 font-semibold">
                Tourist Population Parameter
            </div>
            <div className="flex">
                <img src={arrow} className="w-8 h-8 ml-12 mt-2"></img>
                <div className="font-bold mr-2 mt-3 ml-2">3.54 %</div>
                <div className="mt-3">Since last month</div>
            </div>
            <div className="flex">
                <div className="mr-1 mt-1 ml-20">Increased Since Last Month :</div>
                <div className="mt-1 font-bold">15,384</div>
            </div>

          </div>
        </div>
        <div className="flex flexrow ml-40 border border-1 rounded-lg mr-40 mt-8">
          <div className="basis-2/12">
            <img src={ooty} className="w-48 h-32 rounded-md"></img>
          </div>
          <div className="basis-7/12 ">
            <div className="flex">
              <div className="text-3xl font-bold ml-4 mt-2">2. Ooty</div>
              <div className="text-3xl font-light  ml-2 mt-2"> , India</div>
              <div className="text-3xl font-semibold  ml-52 mt-2 text-red-500">
                Overcrowded
              </div>
            </div>
            <div className=" text-sm ml-4 mt-2 mr-2">
                Goa , Located on the western coast of india , is known for its stunning beaches , vibrant nightlife , rich portugese heritage , and laid back atmosphere . It's a popular tourist destination offering a blend of natural beauty . cultural experiences and adventure.
            </div>
          </div>
          <div className="basis-4/12 border rounded-lg border-black">
            <div className="text-xl text-center mt-3 font-semibold">
                Tourist Population Parameter
            </div>
            <div className="flex">
                <img src={arrow} className="w-8 h-8 ml-12 mt-2"></img>
                <div className="font-bold mr-2 mt-3 ml-2">3.05 %</div>
                <div className="mt-3">Since last month</div>
            </div>
            <div className="flex">
                <div className="mr-1 mt-1 ml-20">Increased Since Last Month :</div>
                <div className="mt-1 font-bold">17,553</div>
            </div>

          </div>
        </div>
        <div className="flex flexrow ml-40 border border-1 rounded-lg mr-40 mt-8">
          <div className="basis-2/12">
            <img src={Goa} className="w-48 rounded-md"></img>
          </div>
          <div className="basis-7/12 ">
            <div className="flex">
              <div className="text-3xl font-bold ml-4 mt-2">3. Darjeeling</div>
              <div className="text-3xl font-light  ml-2 mt-2"> , India</div>
              <div className="text-3xl font-semibold  ml-32 mt-2 text-green-500">
                Not Crowded
              </div>
            </div>
            <div className=" text-sm ml-4 mt-2 mr-2">
                Goa , Located on the western coast of india , is known for its stunning beaches , vibrant nightlife , rich portugese heritage , and laid back atmosphere . It's a popular tourist destination offering a blend of natural beauty . cultural experiences and adventure.
            </div>
          </div>
          <div className="basis-4/12 border rounded-lg border-black">
            <div className="text-xl text-center mt-3 font-semibold">
                Tourist Population Parameter
            </div>
            <div className="flex">
                <img src={arrow} className="w-8 h-8 ml-12 mt-2"></img>
                <div className="font-bold mr-2 mt-3 ml-2">2.54 %</div>
                <div className="mt-3">Since last month</div>
            </div>
            <div className="flex">
                <div className="mr-1 mt-1 ml-20">Increased Since Last Month :</div>
                <div className="mt-1 font-bold">7,675</div>
            </div>
            

          </div>
        </div>
        <div className="text-center font-light text-lg mt-12">
                And More Coming Soon.
            </div>
      </>
    </div>
  );
};

export default PopulationAnalysis;
