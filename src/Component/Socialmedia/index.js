import React ,{useState ,useEffect} from 'react'
import "./style.js";
import { Icon, P, Social, SocialMediaSection, Span } from './style.js';
import axios from 'axios';

const SocialMedia = () =>{

const [socials , setSoctial] = useState([]);
useEffect(()=>{
  axios.get('js/data.json').then(res => setSoctial(res.data.social))
})

const socialItems = socials.map((item) =>{
  return(
    <Social info ={item.props}  key ={item.id}>
      <Icon className={item.icon}></Icon>
      <P>
          <Span>{item.title}</Span>
          <Span info2>{item.body}</Span>
      </P>
   </Social>
  )
})

  return(
    
       <SocialMediaSection>
          {socialItems}
        </SocialMediaSection>
    
  )
}

export default SocialMedia;