import React from 'react'
import './About.css'
import Me from '../../pictures/me2.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscNewFolder} from 'react-icons/vsc'

const About = () => {
  return (
    <section id="about">
       <h5>Get To Know </h5>
       <h2>About Me</h2>

       <div className="container about__container">
        <div className="about__me">
       <div className="about__me-image">
        <img src={Me} alt="Me"/>
       </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
        <article className="about__card">
        <FaAward className='about__icon'/>
       <h5>Experience</h5>
       <small>2+ years working</small>
        </article>

        <article className="about__card">
        <FiUsers className='about__icon'/>
       <h5>Clients</h5>
       <small>50+ Worldwide</small>
        </article>

        <article className="about__card">
        <VscNewFolder className='about__icon'/>
       <h5>Projects</h5>
       <small>8+ Completed</small> 
        </article>
          </div>
          <p>
          Hello, I'm Augustine Ifeanyi.
                        A full-stack developer and also a forex trader from Imo, Nigeria. I enjoy trading forex and also building websites from small sites to rich interactive cross platform mobile/web apps. If you are a business seeking a web presence or an employer looking to hire or you are looking for a profitable trader to invest your funds, you can get in touch with me.
          </p>
          <a href="#contact" className="btn btn-primary">Let's Talk</a>


        </div>
       </div>
    </section>
  )
}

export default About
