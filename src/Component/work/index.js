import React,{Component} from 'react';
import axios from 'axios';
import './style.js'
import  {WorkSection , WorkTitle ,Span, Icon, PartTitle, Line, PartDesc, Part } from './style.js';




class Work extends Component {
 state = { 
     name:[]
  }

  componentDidMount (){
      axios.get('js/data.json')
      .then(res =>{this.setState({
          name:res.data.works
      })})
  }


 render() { 
     const works =this.state.name
     const worksList = works.map(work=>{
         return(
            <Part first = {work.id} key={work.id}  >
            <Icon className={work.icon_name}></Icon>
            <PartTitle>{work.title}</PartTitle>
            <Line/>
            <PartDesc>
               {work.body}
            </PartDesc>
        </Part> 
         )
     }) 

     return(
      <WorkSection>
        <div className="container">
            <WorkTitle><Span>My</Span> Work</WorkTitle>
              {worksList}    
        </div>
      </WorkSection>
     )
    }
}

export default Work;