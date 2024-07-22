import Menubar from "./Menubar";
import Navbar from "./Navbar";
import Content from "./Content";
import { useEffect, useState } from "react";

import React from 'react'

const Main = () => {
  

  return (
    <div>
        <Navbar/>
        <Menubar/>
        <Content/>
    </div>
  )
}

export default Main