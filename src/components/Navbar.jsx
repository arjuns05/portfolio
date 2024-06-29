import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import {Link, DirectLink, Element, Events, animateScroll as scroll, scrollSpy, scroller  } from 'react-scroll'

const Navbar = () => {
  const [nav, setNav] = useState(false);
  const [fix, setFix] = useState(false)

  
  const handleNav = () => {
    setNav(!nav);
  };



  return (
    


    <div className='sticky top-0 flex justify-between items-center h-24  mx-auto px-4 bg-[#00df9a] text-black '>
      <h1 className='w-full text-2xl font-bold text-black'>SWE Portolio</h1>
      <ul className='hidden md:flex'>
        <li className='p-4'> 
        <Link activeClass="active" smooth spy to="home">

        Home
        </Link>
          </li>
          <li className='p-4'> 
        <Link activeClass="active" smooth spy to="about">

        About
        </Link>
          </li>
          <li className='p-4'> 
        <Link activeClass="active" smooth spy to="timeline">

        Experience
        </Link>
          </li>
        <li className='p-4'> 
        <Link activeClass="active" smooth spy to="projects">

        Projects
        </Link>
          </li>
 
        <li className='p-4'> <Link activeClass="active" smooth spy to="contact">
Contact </Link> </li>
      </ul>
      <div onClick={handleNav} className='block md:hidden'>
          {nav ? <AiOutlineClose size={20}/> : <AiOutlineMenu size={20} />}
      </div> 
      <ul className={nav ? 'fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#00df9a] ease-in-out duration-500' : 'ease-in-out duration-500 fixed left-[-100%]'}>
        <h1 className='w-full text-3xl font-bold text-black m-4'>SWE Portfolio</h1>
        <li className='p-4 text-black'> 
        <Link activeClass="active" smooth spy to="home">

        Home
        </Link>
          </li>
          <li className='p-4 text-black'> 
        <Link activeClass="active" smooth spy to="about">

        About
        </Link>
          </li>
          <li className='p-4 text-black'> 
        <Link activeClass="active" smooth spy to="timeline">

        Experience
        </Link>
          </li>
        <li className='p-4 text-black'> 
        <Link activeClass="active" smooth spy to="projects">

        Projects
        </Link>
          </li>
 
        <li className='p-4 text-black'> <Link activeClass="active" smooth spy to="contact">
Contact </Link> </li>
      </ul>
    </div>

  );
};

export default Navbar