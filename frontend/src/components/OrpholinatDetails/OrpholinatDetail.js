import React from 'react'
import './orpholinatDetail.css';
import Header from '../HomePage/header/Header'
import img from '../../images/girl.png'
import {FiUsers} from 'react-icons/fi'

const OrpholinatDetail = () => {
  return (
    <div>
        <Header />
        <section id="detail">
        {/* <h5>A propos de nous</h5>
        <h2>Qui somme nous?</h2> */}

        <div className="container desc__container">
        <div className="desc__content"> 
            <h2>Orphelinat du Grand Casablanca</h2>
            <h5>8, rue Assaad Ibnou Zarara - ex Ballon d'Alsace, résid. Magna</h5>
            <h5> +212 5 12 345 678, +212 5 12 345 678</h5>
            <p>
            C'est un fait établi depuis longtemps qu'un lecteur sera distrait par le contenu lisible d'une page en regardant sa mise en page. 
            L'intérêt d'utiliser le Lorem Ipsum est qu'il présente une distribution plus ou moins normale des lettres, par opposition à l'utilisation de "Contenu ici, contenu ici", 
            ce qui lui donne l'apparence d'un anglais lisible. De nombreux logiciels de publication assistée par ordinateur et éditeurs de pages Web utilisent désormais le Lorem Ipsum comme modèle de texte par défaut,
            et une recherche sur "lorem ipsum" permet de découvrir de nombreux sites Web qui en sont encore à leurs débuts.
            </p>

            {/* <a href="#conatct" className='btn btn-primary'>Découvrir nous orpholinats</a> */}
        </div>
            <div className="about__me">
                <div className="about__card">
                    <h1>94</h1  >
                    <h5>Orpholins</h5>
                </div>
            </div>
        </div>
        <div>
        <article className="orpholinat__item">
            
                <div className="orpholinat__item-image">
                  <img className="card-img-top p-3"
                  src={img}
                  />
                </div>
                <h3 className="card-title">AZERTYUI</h3>
                <div className="orphoninat__item-cta">
                  <h4>SDFGHJKL</h4>
                  {/* <a href="/OrpholinatDetail" className='btn'>Découvrez plus</a> */}
                </div>
              </article>
        </div>

        
        
        </section>
    </div>
  )
}

export default OrpholinatDetail