import React from 'react'
import './orpholinatDetail.css';
import Header from '../HomePage/header/Header'
import img from '../../images/girl.png'
import imgB from '../../images/boy.png'
import {FiUsers} from 'react-icons/fi'

const OrpholinatDetail = () => {
  return (
    <div>
        <Header />
        <section id="detail">
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
            </div>

            <div className="about__me">
                <div className="about__card">
                    <h1>94</h1  >
                    <h5>Orpholins</h5>
                </div>
            </div>
          </div>


          <div>
            <div id='portfolio' className="vh">
            {/* <h5 className="page-title">Nos Orphelins</h5> */}
              <div className="container orpholinat__container">
                <article className="orpholinat__item">
                  <div className="orpholinat__item-image">
                    <img className="card-img-top p-3"
                      src={imgB}
                    />
                  </div>
                  <h3 className="card-title">NAME</h3>
                  <div className="orphoninat__item-cta">
                    <h4>Boy --14 YEARS OLD</h4>
                  </div>
                </article>
                <article className="orpholinat__item">
                  <div className="orpholinat__item-image">
                    <img className="card-img-top p-3"
                      src={img}
                    />
                  </div>
                  <h3 className="card-title">NAME</h3>
                  <div className="orphoninat__item-cta">
                    <h4>Girl --10 YEARS OLD</h4>
                  </div>
                </article>
                <article className="orpholinat__item">
                  <div className="orpholinat__item-image">
                    <img className="card-img-top p-3"
                      src={img}
                    />
                  </div>
                  <h3 className="card-title">NAME</h3>
                  <div className="orphoninat__item-cta">
                    <h4>Girl --2 YEARS OLD</h4>
                  </div>
                </article>
                <article className="orpholinat__item">
                  <div className="orpholinat__item-image">
                    <img className="card-img-top p-3"
                      src={imgB}
                    />
                  </div>
                  <h3 className="card-title">NAME</h3>
                  <div className="orphoninat__item-cta">
                    <h4>Boy --10 YEARS OLD</h4>
                  </div>
                </article>
                <article className="orpholinat__item">
                  <div className="orpholinat__item-image">
                    <img className="card-img-top p-3"
                      src={img}
                    />
                  </div>
                  <h3 className="card-title">NAME</h3>
                  <div className="orphoninat__item-cta">
                    <h4>Girl --7 YEARS OLD</h4>
                  </div>
                </article>
                <article className="orpholinat__item">
                  <div className="orpholinat__item-image">
                    <img className="card-img-top p-3"
                      src={imgB}
                    />
                  </div>
                  <h3 className="card-title">NAME</h3>
                  <div className="orphoninat__item-cta">
                    <h4>Boy --11 YEARS OLD</h4>
                  </div>
                </article>
              </div>
            </div>
          </div>
      
        </section>
    </div>
  )
}

export default OrpholinatDetail