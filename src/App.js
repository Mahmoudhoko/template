import React, { Component } from 'react';
import { BrowserRouter,Route } from "react-router-dom";
import Contact from './Component/Contact/index';
import Navbar from './Component/Navbar/index';
import Items from './Component/Index/Items';

class App extends Component {
  
  render() { 
    return ( 
      <BrowserRouter>
        <Navbar/>
        <Route exact path ='/' component ={Items}/>
        <Route path ='/contact' component ={Contact}/>
      </BrowserRouter>
     );
  }
}
 
export default App;


