import React, { Component } from 'react';
import Home from './../Home/index';
import Profile from './../Profile/index';
import Portfolio from './../Portfolio/index';
import Work from './../work/index';
import Footer from './../Footer/index';
import SocialMedia from './../Socialmedia/index';
import About from './../About/index';

class Items extends Component {
  
  render() { 
    return ( 
      <main>
        <Home/>
        <Work/>
        <Portfolio/>
        <Profile/>
        <About/>
        <SocialMedia/>
        <Footer/>
      </main>
     );
  }
}
 
export default Items;


