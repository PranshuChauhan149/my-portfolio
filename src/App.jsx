import React from 'react'
import Home from './pages/Home'
import Sidebar from './components/Sidebar'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Rusume from './pages/Rusume'
import Project from './pages/Project'
import Blog from './pages/Blog'
import Contact from './pages/Contact'


const App = () => {
  return (
    <div className=' h-full lg:h-screen  p-4 lg:p-10 bg-black'>
      

  
    <div className="w-full  h-full flex flex-col  lg:flex-row gap-2.5 ">
      {/* Profilo */}
      <div className="w-full bg-[#2b2929e7] lg:w-[25%] rounded-lg">
        <Sidebar/>

      </div>
      {/* secondMain */}
      <div className=" w-full h-full rounded-lg flex flex-col gap-2.5">
        {/* navbar */}
        <div className="bg-[#2b2929e7] h-[50px] rounded-lg">
          <Navbar/>
        </div>
        {/* main Part */}
        <div className=" slider bg-[#2b2929e7] rounded-lg overflow-auto h-[500px] lg:h-full lg:overflow-auto">
          
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/rusume' element={<Rusume/>}/>
            <Route path='/project' element={<Project/>}/>
            <Route path='/blog' element={<Blog/>}/>
            <Route path='/contact' element={<Contact/>}/>
          </Routes>
        </div>
      </div>
    </div>
    </div>
  )
  
      
    
  
}

export default App
