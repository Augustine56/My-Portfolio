/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './Footer.css'
import {FaFacebookF} from 'react-icons/fa'
import {FiInstagram} from 'react-icons/fi'
import {IoLogoTwitter} from 'react-icons/io'

const Footer = () => {
  return (
    <footer>
       <a href="#" className="footer__logo"> A.I </a>

       <ul className="permlinks">
        <li><a href='#'> Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        <li><a href='#services'>Services</a></li>
        <li><a href='#portfolio'>Portfolio</a></li>
        <li><a href='#testimonials'>Testimonials</a></li>
        <li><a href='#contact'>Contact</a></li>
      </ul>
      <div className="footer__socials">
        <a href="https://www.facebook.com/ifeanyi.osuji.733?mibextid=LQQJ4d" rel="noopener noreferrer" target="_blank"> <FaFacebookF/></a>
        <a href="https://instagram.com/the_cute_ify?igshid=YmMyMTA2M2Y=" rel="noopener noreferrer" target="_blank"> <FiInstagram/></a>
        <a href="https://twitter.com/OsujiIfeanyi5?t=Dxpyu5nXDork_5h-RW0A0A&s=08" rel="noopener noreferrer" target="_blank"> <IoLogoTwitter/></a>
      </div>

      <div className="footer__copyright">
        <small>
          &copy; A.I. All rights reserved.
        </small>


      </div>
    </footer>
  )
}

export default Footer
