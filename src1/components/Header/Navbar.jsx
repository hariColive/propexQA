import React from 'react'
import { useState } from "react";
import Logo from '/images/logo.png';
import {NavBarMenu} from '../../data/nav';
import './navbar.css';
import UserIcon from '/icons/Nav/HeaderProfile.png';
import CallIcon from '/icons/Nav/HeaderCall.png';
import whatsappIcon from '/icons/Nav/whatsapp.png';
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { FaRegUserCircle } from "react-icons/fa";
import Sidemenu from './Sidemenu';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  return (
    <>
    <nav className='bg-black fixed w-full top-0 z-10'>
    <div className='head-container flex justify-between items-center py-1'>
      {/*Logo*/}
      <div className='Logo'>
           <a href="/"><img src={Logo} alt="Logo" className='w-[200px] ' /></a>
        </div>
      {/*Menu Item*/}
      <div className='navitems'>
        <ul className='flex items-center gap-6'>
          {
            NavBarMenu.map((item) =>{
              return (
                <li key={item.id}>
                  <a href={item.link} className='inline-block text-white text-lg font-medium'>{item.title}</a>
                </li>
              );
            })
          }
        </ul>
      </div>
      {/*Right Buttons*/}
      <div className='navicons flex items-center justify-end gap-6'>
        <div className='usericon'>
            <a href="/"><img src={UserIcon} width={30} alt="User" /></a>
        </div>
        <div className='usericon'>
        <a href="/"><img src={CallIcon} width={30} alt="Call" /></a>
        </div>
        <div className='whatsappIcon'>
        <a href="/"><img src={whatsappIcon} width={30} alt="Whatsapp" /></a>
        </div>
        <div className='MenuIcon cursor-pointer'>
        <GiHamburgerMenu onClick={toggleMenu}  className="text-white text-3xl" />
        </div>
      </div>
    </div>
    </nav>
    {/* Side Menu */}
    <div
       className={`fixed top-0 right-0 h-full w-2xs z-10 bg-white shadow-lg transform transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : 'translate-x-full'
      }`}
    >
      <div className="p-4 bg-black flex justify-between">
      <div className='UserIcon cursor-pointer'>
        <FaRegUserCircle className="text-[#EF1284] text-3xl" />
        </div>
        <div className='cursor-pointer text-[#EF1284] text-3xl font-extrabold flex justify-end' onClick={toggleMenu}><IoClose /></div></div>
      <Sidemenu />
    </div>

    {/* Overlay */}
    {isOpen && (
      <div
        className="fixed inset-0 bg-black opacity-40"
        onClick={toggleMenu}
      ></div>
    )}
    </>
  )
}

export default Navbar
