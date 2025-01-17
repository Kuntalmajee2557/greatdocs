import React from 'react'
import TopicIcon from './icons/TopicIcon'
import FileIcon from './icons/FileIcon'


function Subsidebar() {
  return (
    <aside className='m-4'>
      <div className='mb-2'>
        <h2 className='text-xl font-bold '>On this page</h2 >
      </div>
      <nav >
        <ul>
          <li className='px-2 pb-1'>
            <button className='text-xl'>quick start</button>
          </li>
          <li className='px-2 pb-1'>
            <button className='text-xl'>quick start</button>
          </li>
          <li className='px-2 pb-1'>
            <button className='text-xl'>quick start</button>
          </li>
        </ul>
      </nav>
    </aside>
  )
}

export default Subsidebar