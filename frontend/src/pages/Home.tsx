import React from 'react'
import { useNavigate } from 'react-router-dom'

function Home() {
    const navigate = useNavigate()
  function clickHandler(){
    navigate('/docs')
  }
  return (
    <div>Documentation
    <button onClick={clickHandler} className='bg-red-500'>
      browse
    </button>
  </div>
  )
}

export default Home