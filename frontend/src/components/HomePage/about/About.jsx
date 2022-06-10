import React from 'react'
import './about.css'
import img from '../../../images/girl.png'
import {FiUsers} from 'react-icons/fi'

const About = () => {
  return (
    <section id='about'>
      <h5>A propos de nous </h5>
      <h2>Qui somme nous?</h2>

      <div className=".container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={img} alt="" />
          </div>
        </div>

        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>17</h5  >
              <small>Orpholinat</small>
             </article>

             <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>172</h5  >
              <small>Enfants</small>
             </article>

             <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>73</h5  >
              <small>Adopté(e)</small>
             </article>

             <article className="about__card">
              <FiUsers className='about__icon'/>
              <h5>61</h5  >
              <small>Hébergé(e)</small>
             </article>
          </div>

          <p>
            C'est un fait établi depuis longtemps qu'un lecteur sera distrait par le contenu lisible d'une page en regardant sa mise en page. L'intérêt d'utiliser le Lorem Ipsum est qu'il présente 
            une distribution plus ou moins normale des lettres, par opposition à l'utilisation de "Contenu ici, contenu ici", ce qui lui donne l'apparence d'un anglais lisible. De nombreux logiciels de publication assistée par ordinateur et éditeurs de pages Web utilisent désormais le Lorem Ipsum comme modèle de texte par défaut, et une recherche sur"lorem ipsum" permet de découvrir de nombreux sites Web qui en sont encore à leurs débuts.
          </p>

          <a href="#conatct" className='btn btn-primary'>Découvrir nous orpholinats</a>
        </div>
      </div>
    
    </section>
  )
}

export default About