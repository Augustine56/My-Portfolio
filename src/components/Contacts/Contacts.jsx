import React from 'react'
import './Contacts.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs'
import  { useRef } from 'react'
import emailjs from 'emailjs-com'

const Contacts = () => {
  const form = useRef();


  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_htqscq5', 'template_3eokh2h', form.current, 'FV8eCzRw7ij0wzGTO')
      e.target.reset()
  };

  return (
    <section id="contact">
       <h5>Get In Touch</h5>
       <h2>Contact Me</h2>

       <div className='container contact__container'>
       <div className="contact__options">
       <article className="contact__option">
        <MdOutlineEmail className="contact__option-icon"/>
        <h4>Email</h4>
        <h5>Osujiifeanyi89@gmail.com</h5>
        <a href="mailto:Osujiifeanyi89@gmail.com" target="_blank" rel="noreferrer"> Send me a message </a>
       </article>
       <article className="contact__option">
        <RiMessengerLine className="contact__option-icon"/>
        <h4>Messenger</h4>
        <h5>Ifeanyi Osuji</h5>
        <a href="https://m.me/AI.fx.02" target="_blank" rel="noreferrer">Send me a message </a>
       </article>
       <article className="contact__option">
        <BsWhatsapp className="contact__option-icon"/>
        <h4>WhatsApp</h4>
        <h5>+2349065999125</h5>
        <a href="https://api.whatsapp.com/send?phone=+2349065999125" target="_blank" rel="noreferrer">Send me a message </a>
       </article>
       </div>
     {/* END OF CONTACT OPTIONS */}
     <form ref={form} onSubmit={sendEmail}>
      <input type="text" name='name' placeholder="Your Full Name" required/>
      <input type="email" name='email' placeholder="Your Email" required/>
      <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
      <button type="submit" className="btn btn-primary">Send Message</button>


      


     </form>
       </div>
    </section>
  )
}

export default Contacts
