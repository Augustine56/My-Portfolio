import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import { BsTwitterX } from "react-icons/bs"

const HeaderSocials = () => {
  return (
    <div className="header__socials">
       <a href="https://www.linkedin.com/in/augustine-osuji-a46977230" rel="noopener noreferrer" target="_blank"><BsLinkedin/></a>
       <a href="https://github.com/Augustine56/MY-PROJECT.git" rel="noopener noreferrer" target="_blank"><FaGithub/></a>
       <a href="https://twitter.com/OsujiIfeanyi5?t=Dxpyu5nXDork_5h-RW0A0A&s=08" rel="noopener noreferrer" target="_blank"><BsTwitterX /></a>
    </div>
  )
}

export default HeaderSocials
