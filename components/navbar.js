import React, { useState } from 'react'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {
        !isOpen ? (
          <nav className='fixed font-bold p-3 w-full h-15 bg-gray-50 text-black text-xl flex-auto'>
            Navbar
            <button>
              <svg
                onClick={() => setIsOpen(!isOpen)}
                className='fixed z-30 flex items-center cursor-pointer right-10 top-6'
                fill='black'
                viewBox='0 0 100 80'
                width='14'
                height='14'
              >
                <rect width='100' height='10'></rect>
                <rect y='30' width='100' height='10'></rect>
                <rect y='60' width='100' height='10'></rect>
              </svg>
          </button>
      </nav>
         
        ) : (
          <nav className={`top-0 right-0 fixed bg-gray-50 w-full h-[35vw] p-10 ${isOpen ? 'translate-y-0' : 'translate-y-10'} ease-in-out duration-300`}>
            <button className='text-black' onClick={() => setIsOpen(!isOpen)}>x</button>
            <h2 className='text-2xl text-black'>The sidebar</h2>
          </nav>
        )
      } 
    </>
    
  )
}

export default Navbar

