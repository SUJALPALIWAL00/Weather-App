import React from 'react'

const Navbar = () => {
  return (
    <div>
      <div className="navbar  flex items-center gap-7 ">
        <img src="logo.png" alt="" className='md:h-35 h-25' />
        <p className='md:text-3xl text-2xl font-bold' >The Weather App</p>
      </div>
    </div>
  )
}

export default Navbar
