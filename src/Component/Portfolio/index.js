import React,{useState,useEffect} from 'react'
import axios from 'axios'
import './style.js'
import { PortfolioList, PortfolioSection, PortfolioTitle, Span, PrtfolioItem,BoxDiv, Img, Overlay, OverlaySpan } from './style.js';


const Portfolio =()=>{

const [images , setImages] = useState([])
useEffect(()=>{
    axios.get('js/data.json').then(res =>{setImages(res.data.Portfolio)})
},[])

const PortfolioImages = images.map((imageItem) =>{
    return(
        <BoxDiv key ={imageItem.id}>
            <Img src={imageItem.image}/>
            <Overlay>
                <OverlaySpan>
                    Show Image
                </OverlaySpan>
            </Overlay>
        </BoxDiv>
    )
})

  return(
       <PortfolioSection>
            <PortfolioTitle><Span>My</Span> Portfolio</PortfolioTitle>
            <PortfolioList>
                <PrtfolioItem active >All</PrtfolioItem>
                <PrtfolioItem>HTML</PrtfolioItem>
                <PrtfolioItem>Photoshop</PrtfolioItem>
                <PrtfolioItem>Wordpress</PrtfolioItem>
                <PrtfolioItem>Mobile</PrtfolioItem>
            </PortfolioList>
            {PortfolioImages}
        </PortfolioSection>
        
     
  )
}

export default Portfolio;