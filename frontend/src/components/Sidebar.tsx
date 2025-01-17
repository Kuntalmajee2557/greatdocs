import React from 'react'
import TopicIcon from './icons/TopicIcon'
import FileIcon from './icons/FileIcon'
function Sidebar() {
  return (
    <aside className='mt-5'>
      <div className='flex size-3xl items-center gap-2 mb-2 '>
        <TopicIcon className='w-7 h-7 text-white'/>
        <h2 className='text-3xl font-bold'>Topic</h2 >
      </div>
      <nav >

        <ul>
          <li className='flex gap-2 items-center pt-2 pl-1'>
            <FileIcon className='w-5 h-5 text-white' />
            <button className='text-xl'>quick start</button>

          </li>
          <li className='flex gap-2 items-center pt-2 pl-1'>
            <FileIcon className='w-5 h-5' />
            <button className='text-xl'>installation</button>

          </li>
          <li className='flex gap-2 items-center pt-2 pl-1'>
            <FileIcon className='w-5 h-5' />
            <button className='text-xl'>simple server</button>

          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Sidebar