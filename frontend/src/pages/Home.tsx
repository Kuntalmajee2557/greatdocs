import React from 'react'
import { useNavigate } from 'react-router-dom'
import BookIcon from '../components/icons/BookIcon'

function Home() {
  const navigate = useNavigate()
  function clickHandler() {
    navigate('/docs')
  }
  return (
  <div className='h-screen bg-black flex flex-col justify-center items-center bg-[url("1111767_589.jpg")]'>
    <BookIcon className='w-48 h-48 text-cyan-500'/>
    <button onClick={clickHandler} className='text-xl text-white border border-gray-600 py-2 px-9 rounded-lg mt-12'>Browser Docs</button>
  </div>
  )
}

export default Home