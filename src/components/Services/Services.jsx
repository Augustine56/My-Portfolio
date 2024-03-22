import React from 'react'
import './Services.css'
import {BiCheck} from 'react-icons/bi'

const Services = () => {
  return (
    <section id="services">
       <h5> What I Offer</h5>
       <h2>My Services</h2>

       <div className='container services__container'>
        <article className='service'>
          <div className='service__head'>
            <h3>Web Development</h3>
          </div>
          <ul className='service__list'>
            <li> 
              <BiCheck className='service__list-icon'/>
            <p>Website application from scratch</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
            <p>Website application from scratch</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
            <p>Website application from scratch</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
            <p>Website application from scratch</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
            <p>Website application from scratch</p>
            </li>
          </ul>
        </article>
        {/* END OF WEB Development */}
        <article className='service'>
          <div className='service__head'>
            <h3>Mobile App Development</h3>
          </div>
          <ul className='service__list'>
            <li> 
              <BiCheck className='service__list-icon'/>
            <p>Mobile application from scratch</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
            <p>Mobile application from scratch</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
            <p>Mobile application from scratch</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
            <p>Mobile application from scratch</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
            <p>Mobile application from scratch</p>
            </li>
          </ul>
        </article>
        {/* END OF MOBILE APPLICATION */}
        <article className='service'>
          <div className='service__head'>
            <h3>Content Creation/Forex trading</h3>
          </div>
          <ul className='service__list'>
            <li> 
              <BiCheck className='service__list-icon'/>
            <p>Create new ideas</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
            <p>Create new ideas</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
            <p>Create new ideas</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
            <p>Trade the financial market</p>
            </li>
            <li> 
              <BiCheck className='service__list-icon'/>
            <p>Trade the financial market</p>
            </li>
          </ul>
        </article>
        {/* END OF CONTENT CREATION */}

       </div>
    </section>
  )
}

export default Services
