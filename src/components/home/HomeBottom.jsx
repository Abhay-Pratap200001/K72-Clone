import React from 'react'
import {Link} from 'react-router-dom'

const HomeBottom = () => {
  return (
    <div className='flex justify-center items-center gap-4'>
      <Link className='text-[6.5vw] border-5 leading-[7vw] border-white rounded-full px-10 uppercase'>Projects</Link>
      <Link className='text-[6.5vw] border-5 leading-[7vw] border-white rounded-full px-10 uppercase'>Agence</Link>
    </div>
  )
}

export default HomeBottom 