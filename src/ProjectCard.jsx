import React from 'react'
import ImageCard from './ImageCard'
import appdata from './appdata'



const ncard = (val) =>{
  return < ImageCard key={val.id} title={val.title} imgsrc={val.imgsrc} desc={val.desc} />
}

const ProjectCard = () => {
  return (
    <div  className='row gap-30px'>
    <h2>Marvel</h2>
      {appdata.map((val,index)=>(
        <div key ={val.id} className='col-md-3'>
          {ncard(val)}
        </div>
      ))}
    </div>
  )
}

export default ProjectCard
