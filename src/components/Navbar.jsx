import React, { useState } from 'react'
import { FaTimes, FaBars, FaGithub, FaLinkedinIn } from 'react-icons/fa'
import { HiOutlineMail } from 'react-icons/hi'
import { BsFillPersonLinesFill } from 'react-icons/bs'
import Logo from '../assets/logo1.png'
import { Link } from 'react-scroll'

const Navbar = () => {

  const [nav, setNav] = useState(false);

  const handleClick = () => {
    setNav(!nav)
  }

  function op(url) {
    window.open(url, '_blank');
  }

  return (
    <div className='flex w-full h-[80px] justify-between items-center px-4 bg-[#0a192f] text-gray-300'>
      <div>
        <img src={Logo} alt="logo" style={{ width: '50px' }} />
      </div>
      {/* menu */}


      <ul className='hidden md:flex' >
        <li>
          <Link className='md:px-4' to='home' smooth={true} duration={500} >
            Home
          </Link>
          <Link className='md:px-4' to='about' smooth={true} duration={500} >
            About
          </Link>
          <Link className='md:px-4' to='skills' smooth={true} duration={500} >
            Skills
          </Link>
          <Link className='md:px-4' to='work' smooth={true} duration={500} >
            Work
          </Link>
          <Link className='md:px-4' to='contact' smooth={true} duration={500} >
            Contact
          </Link>
        </li>
      </ul>


      {/* Hamburger */}
      <div className='md:hidden z-10'
        onClick={handleClick}
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/* Mobile Menu */}
      <ul className={!nav ? 'hidden' : 'absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center'} >
        <li className='py-6 text-4xl' >
          <Link onClick={handleClick} to='home' smooth={true} duration={500} >
            Home
          </Link>
        </li>
        <li className='py-6 text-4xl' >
          <Link onClick={handleClick} to='about' smooth={true} duration={500} >
            About
          </Link>
        </li>
        <li className='py-6 text-4xl' >
          <Link onClick={handleClick} to='skills' smooth={true} duration={500} >
            Skills
          </Link>
        </li>
        <li className='py-6 text-4xl' >
          <Link onClick={handleClick} to='work' smooth={true} duration={500} >
            Work
          </Link>
        </li>
        <li className='py-6 text-4xl' >
          <Link onClick={handleClick} to='contact' smooth={true} duration={500} >
            Contact
          </Link>
        </li>
      </ul>


      {/* Social Icons */}
      <div className='hidden lg:flex fixed flex-col top-[35%] left-0' >
        <ul>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-blue-600 '>
            <div
              className='flex w-full items-center justify-between text-gray-300 pl-2'
              onClick={() => op('https://www.linkedin.com/in/carlos-perez-491637245/')}>Linkedin
            </div>

            <FaLinkedinIn size={30} />
          </li>



          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#333333] '>
            <div
              className='flex w-full items-center justify-between text-gray-300 pl-2'
              onClick={() => op('https://github.com/carlospegi')}>Github
            </div>
            <FaGithub size={30} />
          </li>
          <li className='w-[160px] h-[60px] flex justify-between items-center ml-[-100px] hover:ml-[-10px] duration-500 bg-[#376c6b]'>
            <Link
            onClick={handleClick} to='contact'
              className='flex w-full items-center justify-between text-gray-300 pl-2'
             >Email
              <HiOutlineMail size={30} />
            </Link>
          </li>

        </ul>
      </div>
    </div>
  )
}

export default Navbar
