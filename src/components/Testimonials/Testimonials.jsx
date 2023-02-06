 import React from 'react'
import './Testimonials.css'
import AVTR1 from '../../pictures/mypic.jpg'
import AVTR2 from '../../pictures/mypic7.jpg'
import AVTR3 from '../../pictures/mypic.jpg'
import AVTR4 from '../../pictures/mypic7.jpg'

// import Swiper core and required modules
import { Pagination } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';




const data = [
  {
    avatar:AVTR1,
    name: 'Augustine',
    review:'This is a wonderful Portfolio, really beautiful and awesome, great Job. would like working with you in the future, this is a great React project.'
              
  },
  {
    avatar:AVTR2,
    name: 'Ifeanyi',
    review:'This is a wonderful Portfolio, really beautiful and awesome, great Job. would like working with you in the future, this is a great React project.' 
  },
  {
    avatar:AVTR3,
    name: 'Augustine',
    review:'This is a wonderful Portfolio, really beautiful and awesome, great Job. would like working with you in the future, this is a great React project.'
  },
  {
    avatar:AVTR4,
    name: 'Ifeanyi',
    review:'This is a wonderful Portfolio, really beautiful and awesome, great Job. would like working with you in the future, this is a great React project.'
  },
  
  ]

const Testimonials = () => {
  return (
    <section id="testimonials">
    <h5>Review from clients</h5>
    <h2>Testimonials</h2>

    <Swiper className="container testimonials_container"
      // install Swiper modules
      modules={[ Pagination ]}
      spaceBetween={30}
      slidesPerView={1}
      pagination={{ clickable: true }}>
      {
        data.map(({avatar, name, review}, index) => {
          return(
            <SwiperSlide key={index} className="testimonial">
        <div className="client_avatar">
          <img src={avatar} alt="avatar"/>
          </div>
          <h5 className='client_name'>{name}</h5>
          <small  className="client_review">{review}</small>


     
      </SwiperSlide>
          )
        })
      }
    </Swiper>
    </section>
  )
}

export default Testimonials
