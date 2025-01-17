import React from 'react'
import Sidebar from '../components/Sidebar.tsx'
import Subsidebar from '../components/Subsidebar.tsx'
import Navbar from '../components/Navbar.tsx'
import Content from '../components/Content.tsx'
function Documentation() {
  return (
    <div className='fixed h-screen flex justify-center text-white bg-[url("background.jpg")] bg-cover'>
      <div className='bg-transparent h-screen w-9/12 bg-black grid grid-cols-12 grid-rows-12'>
        <div className='bg-transparent col-span-12 row-span-1 border-b-2'>
          <Navbar />
        </div>
        <div className='bg-transparent grid-col-12 row-span-11 col-span-2 border-r-2'>
          <Sidebar />
        </div>
        <div className='bg-transparent row-span-11 col-span-8'>
          <Content />
        </div>
        <div className='bg-transparent row-span-11 col-span-2 border-l-2'>
          <Subsidebar />
        </div>
      </div>
    </div>
  )
}

export default Documentation