import React from 'react'
import { A, CreativeInfo, CreativeSection, InfoDesc, InfoDir, InfoTitle, Span } from './style.js';
import './style.js'

const About =()=>{
  return(
    <CreativeSection>
        <div className="container">
          <CreativeInfo>
              <InfoTitle><Span>This is</Span> Me</InfoTitle>
              <InfoDir>Creative Director</InfoDir>
              <InfoDesc>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est <A href="#">explicabo</A> maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
              </InfoDesc>
              <InfoDesc>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim est explicabo maxime quibusdam quaerat nihil aliquid aperiam deleniti, repellendus dolorum. Possimus nisi cupiditate ad veritatis?
              </InfoDesc>
          </CreativeInfo>
        </div>
    </CreativeSection>
  )
}

export default About;