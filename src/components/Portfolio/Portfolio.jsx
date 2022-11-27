import React from 'react'
import './Portfolio.css'
import Weather from '../../pictures/weather-app-image.png'
import Profile from '../../pictures/profile-app-image.jpg'
import Bitcoin from '../../pictures/bitcoin-wallet-app-image.jpg'
import Sharebook from '../../pictures/sharebook-app-image.png'

const data= [
   {
    id: 1,
    image: Weather,
    title: 'Weather App',
    github: 'https://github.com/Augustine56',
    demo: 'https://weatherapi202.netlify.app'
   },
   {
    id: 2,
    image: Profile,
    title: 'Profile App',
    github: 'https://github.com/Augustine56',
    demo: 'https://weatherapi202.netlify.app'
   },
   {
    id: 3,
    image: Bitcoin,
    title: 'Bitcoin Wallet',
    github: 'https://github.com/Augustine56',
    demo: 'https://weatherapi202.netlify.app'
   },
   {
    id: 4,
    image: Sharebook,
    title: 'Sharebook App',
    github: 'https://github.com/Augustine56',
    demo: 'https://weatherapi202.netlify.app'
   },

]

const Portfolio = () => {
  return (
    <section id="portfolio">
       <h5>My Recent  Works</h5>
       <h2>Portfolio</h2>
       
       <div className='container portfolio__container'>
        {
          data.map(({id, image, title, github, demo}) => {
            return (
              <article  key={id} className='portfolio__item'>
          <div className='portfolio__item-image'>
            <img src={image} alt={title} />
          </div>
          <h3>{title}</h3>
          <div className='portfolio__item-cta'>
          <a href={github} rel="noreferrer" className='btn' target='_blank'>Github</a>
          <a href={demo} className='btn btn-primary' rel="noreferrer" target='_blank'>Live Demo</a>
          </div>
        </article>
            )

          })
        }
       </div>
    </section>
  )
}

export default Portfolio
