import React, { useState } from 'react';
import ProjectCard from '../components/ProjectCard';
import {BlogList} from '../assets/Image';
import BlogCard from '../components/BlogCard';

const Blog = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [flitercat,setfiltercat]  = useState('All');
  
  const [cat,setcat] = useState(BlogList)

  const handleClick = (category) => {
    setActiveCategory(category);
    setfiltercat(category);
    if (category === 'All') {
      setcat(ProjectList); // show all projects
    } else {
      let newlist = ProjectList.filter((item) => item.cate === category);
      setcat(newlist);
    }

    console.log(category);

  };

  const categories = ['All', 'Application', 'Web', 'UI/UX'];

  return (
    <div className='p-8 flex flex-col gap-4'>
      <div className='flex flex-col gap-1'>
        <p className='font-bold text-3xl text-white'>Blogs</p>
        <div className='w-[90px] h-0.5 bg-amber-600'></div>
      </div>

    

<div className='flex gap-6 flex-wrap p-8 items-center justify-center'>
      {cat.map((item)=>(
        <BlogCard image={item.image} name={item.cate} />
      ))}

      </div>

 


     
    </div>
  );
};

export default Blog;
