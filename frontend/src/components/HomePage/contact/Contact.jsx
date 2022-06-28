import React from 'react'
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {RiMessengerLine} from 'react-icons/ri'
import {BsWhatsapp} from 'react-icons/bs';
import { useRef } from 'react';
import emailjs from 'emailjs-com'

const Contact = () => {
  const form = useRef(); //renvoyer un objet modifiable 

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_mefyb2v', 'template_gdjcusc', form.current, 'kpUrDh2fc7IL0gMAb')
    
    e.target.reset()
  };

  return (
    <section id='contact'>
      <h5>ORPHOME</h5>
      <h2>Contact Us</h2>

      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon"/>  
            <h4>Email</h4>
            <h5>salma5daiouf@gmail.com</h5>
            <a href="mailto:salma5daiouf@gmail.com" target="_blank">Envoyer un message</a>
          </article>
          <article className="contact__option">
            <RiMessengerLine className="contact__option-icon"/>  
            <h4>Messenger</h4>
            <h5>orphome</h5>
            <a href="https://m.me/salmadaiouf99" target="_blank">Envoyer un message</a>
          </article>
          <article className="contact__option">
            <BsWhatsapp className="contact__option-icon"/>  
            <h4>Whatsapp</h4>
            <h5>+212 6 21 37 84 74</h5>
            <a href="https://api.whatsapp.com/send?phone=+212621378474" target="_blank">Envoyer un message</a>
          </article>
        </div>
        {/* END OF CONTACT OPTIONS  */}
        <form ref={form} onSubmit={sendEmail}>
          <input type="text" name='name' placeholder='Nom et Prénom' required />
          <input type="email" name='emain' placeholder='Votre email' required />
          <textarea name="message" rows="7" placeholder='Ton message' required></textarea>
          <button type='submit' className='btn btn-primary'>Envoyez ton message</button>
        </form>
      </div>
    </section>
  )
}

export default Contact