import React from 'react'
import './Header.css'
import CTA from './CTA'
import ME from '../../pictures/me2.png'
import HeaderSocial   from './HeaderSocials'

const Header = () => {
  return (
  <header>
    <div className="container header_container">
   <h5>Hello I'm </h5>
   <h1> Augustine Ifeanyi</h1>
   <h5 className="text-light">A Fullstack Developer</h5>
   <CTA/>
   <HeaderSocial/>

   <div className="me">
   <img src={ME} alt="me"/>
   </div>

   <a href="#contact" className="scroll__down">Scroll Down</a>
    </div>
  </header>
  )
}

export default Header
