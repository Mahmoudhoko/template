import React from 'react'
import {Link} from "react-router-dom";
import { NavbarSection, Anchor, Logo, LogoText, UlList,ListItem } from './style.js';


const Navbar =()=>{
  return(
    <NavbarSection>
            
      <div className="container">
          
          <Logo>
              <LogoText>Ultra Profile</LogoText>
          </Logo>
          
          <UlList>
              <ListItem><Link className="active" to="/">Home</Link></ListItem>
              <ListItem><Anchor href="#">Work</Anchor></ListItem>
              <ListItem><Anchor href="#">Portfolio</Anchor></ListItem>
              <ListItem><Anchor href="#">Resume</Anchor></ListItem>
              <ListItem><Anchor href="#">About</Anchor></ListItem>
              <ListItem><Link className="active" to="/Contact">Contact</Link></ListItem>
          </UlList>
          
      </div>
      
   </NavbarSection>
  )
}

export default Navbar;