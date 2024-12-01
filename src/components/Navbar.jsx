import React from 'react';
import logo from '../assets/kevinRushLogo.png';
import { FaLinkedin } from 'react-icons/fa';
import { FaGithub } from 'react-icons/fa';
import { FaInstagram } from 'react-icons/fa';
const Navbar = () => {
  return (
    <nav className='rounded bg-blue-300 mb-20 flex items-center justify-between py-6'>
        <div className='flex flex-shrink-0 items-center'>
            <b className='mx-2 text-4xl bold'>CS</b>
        </div>
        <div className='m-8 flex items-center justify-center gap-4 text-2xl'>
            <FaLinkedin/>
            <FaGithub/>
            <FaInstagram/>
        </div>
    </nav>
  )
}

export default Navbar