import React from 'react'
import './navbar.css'
import {AiOutlineHome} from 'react-icons/ai'
import {AiOutlineUser} from 'react-icons/ai'
import {BiBook} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
import {BiMessageSquareDetail} from 'react-icons/bi'
import { useState } from 'react'

const Navbar = () => {
  const [activeNav, setActiveNav] = useState('#')
  return (
    <nav>
      {/* <a href="#" onClick={()=> setActiveNav('#')} className={activeNav === '#' ? active : ''}><AiOutlineHome/></a> */}
      {/* <a href="#about" onClick={()=> setActiveNav('#about')} className={activeNav === '#bout' ? active : ''}><AiOutlineUser/></a> */}
      <a href="#experience"><BiBook/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contact"><BiMessageSquareDetail/></a>
      <a href="#contact"><BiMessageSquareDetail/></a>
      <a href="#contact"><BiMessageSquareDetail/></a>
    </nav>
  )
}

export default Navbar