import React from 'react'
import { FaBookReader } from "react-icons/fa";
import { FaHandPointRight } from "react-icons/fa";
import { FaRegEye } from "react-icons/fa";
import { RiDownloadLine } from "react-icons/ri";
const Rusume = () => {
  return (
    <div className='p-8 ' 
    >
     <div className='mb-6'>
      <p className='text-3xl text-white font-bold'>Resume</p>
      <div className='h-0.5 w-[90px] mt-1 ml-0.5 bg-amber-600'></div>
     </div>
     <div className='w-[500px]  h-[300px] flex p-2 gap-1'>
      <div className='w-[60px]  p-2 flex flex-col items-center'>
        <div className='bg-[#1f1d1d] h-[40px] w-full rounded-lg flex items-center justify-center'>
          <FaBookReader className='text-yellow-600 text-xl'/>
        </div>
        <div className='h-[30px] bg-white w-[1px]'></div>
        <div className='w-5 bg-black h-5 rounded-full flex justify-center items-center '>
          <div className='w-2 bg-yellow-600 h-2 rounded-full'></div>
        </div>
        <div className='h-[75px] bg-white w-[1px]'></div>
        <div className='w-5 bg-black h-5 rounded-full flex justify-center items-center '>
          <div className='w-2 bg-yellow-600 h-2 rounded-full'></div>
        </div>
      </div>
      <div className='w-full flex flex-col gap-6'>
      <p className='text-2xl text-white p-2 font-bold'>Education</p>
      <p className=' text-[#878181]'><span className='font-semibold'>Lovely Professional University, Punjab</span>

B.Tech in Computer Science and Information Technology
<br />
<span className='text-yellow-600'>2023-2027</span></p>
<p>
  <span className='font-semibold text-[#898383]'>Subhash Academy, Chhibramau, Kannauj
</span>
<br />
<span className='text-[#898383]'>Secondary Education (10th)</span>
<br />
<span className='text-yellow-600'>2019 – 2021</span></p>
      </div>
       
     </div>
    <div>
    <div className='w-[500px]  h-[300px] flex p-2 gap-1'>
      <div className='w-[60px]  p-2 flex flex-col items-center'>
        <div className='bg-[#1f1d1d] h-[40px] w-full rounded-lg flex items-center justify-center'>
          <FaBookReader className='text-yellow-600 text-xl'/>
        </div>
        <div className='h-[30px] bg-white w-[1px]'></div>
        <div className='w-5 bg-black h-5 rounded-full flex justify-center items-center '>
          <div className='w-2 bg-yellow-600 h-2 rounded-full'></div>
        </div>
       
      
      </div>
      <div className='w-full flex flex-col gap-6'>
      <p className='text-2xl text-white p-2 font-bold'>Experience</p>
     
      </div>
       
     </div>
    </div>
    <div className="w-full flex flex-col sm:flex-row justify-center sm:justify-end gap-4 mb-4">
  <button className="flex gap-2 items-center justify-center px-6 py-2 rounded-lg text-yellow-500 bg-[#2b2929] hover:bg-yellow-600 hover:text-black transition-all duration-300 shadow-md hover:shadow-yellow-500/40 hover:scale-105">
    <FaRegEye /> View CV
  </button>

  <button className="flex gap-2 items-center justify-center px-6 py-2 rounded-lg text-yellow-500 bg-[#2b2929] hover:bg-yellow-600 hover:text-black transition-all duration-300 shadow-md hover:shadow-yellow-500/40 hover:scale-105">
    <RiDownloadLine /> Download CV
  </button>
</div>
    </div>
  )
}

export default Rusume