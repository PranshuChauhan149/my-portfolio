import React from 'react'

const Skill = ({image}) => {
  return (
    <div className='w-[60px] h-[60px] rounded-full  '>
     
<img src={image} alt=""  className='w-full h-full rounded-full object-center' />
   
    </div>
  )
}

export default Skill