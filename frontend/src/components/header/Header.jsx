import React from 'react'
import './header.css'
import CTA from './CTA'
import COVER from '../../images/cover.png'

const Header = () => {
  return (
    <header>
        <div className="conatiner header_container">
          <h5>Hello</h5>
          <h1>Salma Jadwa</h1>
          <h5 className="text-light"> chi tkharbi9aaaaaaaa</h5>
          <CTA />

          <div className="cover">
            <img src={COVER} alt="" />
          </div>

          {/* <a href="#contact" className='scroll__down'>Scroll Down</a> */}
        </div>
    </header>
  )
}

export default Header