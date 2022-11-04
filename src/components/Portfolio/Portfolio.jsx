import React from 'react'
import './Portfolio.css'
// import Weather from '../../pictures/weather app icon1.jpg'

const Portfolio = () => {
  return (
    <section id="portfolio">
       <h5>My Recent  Works</h5>
       <h2>Portfolio</h2>
       
       <div className='container portfolio__container'>
        <article className='portfolio__item'>
          <div className='portfolio__item-image'>
            {/* <Weather/> */}
          </div>
          <h3>Weather App</h3>
          <a href='https://weatherapi202.netlify.app' className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>




        </article>
       </div>
    </section>
  )
}

export default Portfolio
