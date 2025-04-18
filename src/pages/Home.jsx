import React from "react";
import './home.css';
import About from '../components/About'
import Skill from "../components/Skill";
import { skillSection } from "../assets/Image";


const Home = () => {
 return <div className="flex flex-col">
 <About/>
 <div className="w-full text-white px-4 md:px-8 py-8 flex flex-col gap-6"  >
 <p className='font-extrabold text-4xl '>Skill</p>
 <div className=" px-4 lg:px-32 flex flex-wrap gap-18 ">
  {skillSection.map((item,index)=>(
    <Skill image={item.image} key={index} />
    
  ))}

 </div>

 </div>
 </div>
};

export default Home;
