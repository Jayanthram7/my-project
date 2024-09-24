import Menubar from "./Menubar";
import Navbar from "./Navbar";
import Content from "./Content";
import Collab from "./Collab";
import { useEffect, useState } from "react";
import Budget_Planning_Trip from "./Budget_Planning_Trip";
import PopulationAnalysis from "./PopulationAnalysis";
import Team from"./Team";
import Footer from"./Footer";

import React from 'react'

const Main = () => {
  

  return (
    <div>
        <Navbar/>
        <Menubar/>
        <Content/>
        <Collab/>
        <PopulationAnalysis/>
        <Budget_Planning_Trip/>
        <Team/>
        <Footer/>
    </div>
  )
}

export default Main