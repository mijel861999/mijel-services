import React, { useState, useEffect } from 'react'
import useWindowDimensions from '../hooks/useWindowDimensions'
import { AiOutlineDisconnect } from 'react-icons/ai'

const NavbarOptions = () => (
  <ul className='tablet:flex phone:hidden justify-around px-20 text-white text-sm'>
    <li className='flex justify-center items-center text-xl'>
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

const NavbarOptionsPhones = ({ setIsOpen, isOpen }) => (
  <ul className='tablet:hidden phone:flex-row justify-around pt-1 text-white text-sm'>
    <div className='border border-white rounded-full w-6 h-6 flex justify-center items-center'>
      <button onClick={() => setIsOpen(!isOpen)}>x</button>
    </div>
    <li className='my-1'>
      <a href='/'>Inicio</a>
    </li> 
    <li className='my1'>
      <a href='/'>Servicios</a>
    </li>
    <li className='my-1'>
      <a href='/'>Nosotros</a>
    </li>
    <li className='my-1'>
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

  const { width, height } = useWindowDimensions()

  console.log(width, height)

  useEffect(()=> {
    if(width > 640) {
      setIsOpen(false)
    }
  }, [width])

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
          <nav className={`tablet:hidden top-0 right-0 fixed bg-black text-white w-full h-[35vw] p-4 z-50 ${isOpen ? 'translate-y-0 ease duration-300' : 'translate-y-10 ease duration-300'}`}> 
            <NavbarOptionsPhones
              setIsOpen={setIsOpen}
              isOpen={isOpen}
            />
          </nav>
        )
      } 
    </>
    
  )
}

export default Navbar

