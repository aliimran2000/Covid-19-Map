import React from 'react'
import { useState } from 'react';
import WorldMap from './Components/WorldMap'
import Header from './Components/Header'
import SideDrawer from './Components/Drawer'



function App() {

  const [country,setCountry] = useState("");


  return (
    <React.Fragment>

    <SideDrawer/>
    <WorldMap/>
        

    </React.Fragment>
  );
}

export default App;
