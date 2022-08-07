import React, { useState } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'
import { AiOutlineDisconnect } from 'react-icons/ai'

const NavbarOptions = () => (
  <ul className='tablet:flex phone:hidden justify-around px-20 text-white text-sm'>
    <li className='flex justify-center items-center'>
      <a href='/'><AiOutlineDisconnect /></a>
    </li> 
    <li>
      <a href='/'>Servicios</a>
    </li>
    <li>
      <a href='/'>Nosotros</a>
    </li>
    <li>
      <a href='/'>Redes Sociales</a>
    </li>
  </ul>
)

const HamburguerOptions = ({ setIsOpen, isOpen }) => (
  <div className='tablet:hidden phone:flex justify-between items-center mx-6'>
    <h1 className='flex justify-center items-center'>
      <AiOutlineDisconnect />
    </h1>
    <button className='flex justify-center items-center'>
      <svg
        onClick={() => setIsOpen(!isOpen)}
        className='fixed z-30 flex items-center cursor-pointer'
        fill='white'
        viewBox='0 0 100 80'
        width='12'
        height='12'
      >
        <rect width='100' height='10'></rect>
        <rect y='30' width='100' height='10'></rect>
        <rect y='60' width='100' height='10'></rect>
      </svg>
    </button>
  </div>
)

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      {
        !isOpen ? (
          <nav className='fixed p-3 w-full h-15 flex-auto'>
            <NavbarOptions /> 
            <HamburguerOptions
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            />
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

