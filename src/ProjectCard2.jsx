import React from 'react'
import ImageCard2 from './ImageCard2'
import Pc2Data from './Pc2data'

const ncard = (val) =>{
    return < ImageCard2 key={val.id} title={val.title} imgsrc={val.imgsrc} desc={val.desc} />
  }
  
  const ProjectCard2 = () => {
    return (
      <div  className='row'>
      <h2>DC</h2>

        {Pc2Data.map((val,index)=>(
          <div key ={val.id} className='col-md-3'>
            {ncard(val)}
          </div>
        ))}
      </div>
    )
  }
  

export default ProjectCard2
