import React from 'react'
import DocIcon from './icons/DocIcon'
import SearchBox from './SearchBox'


function Navbar() {
  return (
    <div>
      <nav className='flex items-center justify-between p-3'>
        <DocIcon className='w-10'/>
        <SearchBox />

      </nav>
    </div>
  )
}

export default Navbar