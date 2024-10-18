import Menubar from "./Menubar";
import Navbar from "./Navbar";
import Content from "./Content";
import Collab from "./Collab";
import { useEffect, useState } from "react";
import Budget_Planning_Trip from "./Budget_Planning_Trip";
import PopulationAnalysis from "./PopulationAnalysis";
import Team from"./Team";
import Footer from"./Footer";
import TRAIN from "./Train_bus_Flight";
import React from 'react'
import { View_existing_collab } from "./View_existing_collab";
import Test from "./test";
import Schedules from "./Schedules";
import Itenary from "./Itenary";

const Main = () => {
  

  return (
    <div>
        <Navbar/>
        <Menubar/>
        <Content/>
        <View_existing_collab/>
        <Collab/>
        <PopulationAnalysis/>
        <Budget_Planning_Trip/>
        <Itenary/>
        <TRAIN/>
        <Schedules/>
        <Team/>
        <Test/>
        <Footer/>
    </div>
  )
}

export default Main