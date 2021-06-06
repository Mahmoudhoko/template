import React from 'react'
import './style.js'
import { HomeInformation,HomeSection, HomeInfo, HomeBtn,HomeTitle,HomeDisc} from './style.js';


const Home =()=>{
  return(
    <HomeSection>
      <div className="container">
          <HomeInformation>
              <HomeTitle>Mahmoud Abdelhady</HomeTitle>
              <HomeInfo>Creative Director</HomeInfo>
              <HomeDisc>
                  Iam a professional <span>UX Designer</span> and Front-End Developer creating modern and resposive designs to Web and Mobile. Let us work together. Thank you. 
              </HomeDisc>
              <HomeBtn>Let's Begin</HomeBtn>
          </HomeInformation>
      </div>
    </HomeSection>
  )
}

export default Home;