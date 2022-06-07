import React from 'react'
import './portfolio.css'
import img1 from '../../images/child.png'

const Portfolio = () => {
  return (
    <section id='portfolio'>
      <h5>Nos Orphelinats</h5>
      <h2>Plus que 12 orphelinat au Maroc</h2>

      <div className="container orpholinat__container">
        <article className="orpholinat__item">
          <div className="orpholinat__item-image">
            <img src={img1} alt="" />
          </div>
          <h3>Orphelinat du Grand Casablanca</h3>
          <div className="orphoninat__item-cta">
            <h4>jzvefbqlb jqrbtreuaq </h4>
            <a href="" className='btn'>Découvrez plus</a>
          </div>
        </article>

        <article className="orpholinat__item">
          <div className="orpholinat__item-image">
            <img src={img1} alt="" />
          </div>
          <h3>Orphelinat du Grand Casablanca</h3>
          <div className="orphoninat__item-cta">
            <h4>jzvefbqlb jqrbtreuaq </h4>
            <a href="" className='btn'>Découvrez plus</a>
          </div>
        </article>

        <article className="orpholinat__item">
          <div className="orpholinat__item-image">
            <img src={img1} alt="" />
          </div>
          <h3>Orphelinat du Grand Casablanca</h3>
          <div className="orphoninat__item-cta">
            <h4>jzvefbqlb jqrbtreuaq </h4>
            <a href="" className='btn'>Découvrez plus</a>
          </div>
        </article>

        <article className="orpholinat__item">
          <div className="orpholinat__item-image">
            <img src={img1} alt="" />
          </div>
          <h3>Orphelinat du Grand Casablanca</h3>
          <div className="orphoninat__item-cta">
            <h4>jzvefbqlb jqrbtreuaq </h4>
            <a href="" className='btn'>Découvrez plus</a>
          </div>
        </article>

        <article className="orpholinat__item">
          <div className="orpholinat__item-image">
            <img src={img1} alt="" />
          </div>
          <h3>Orphelinat du Grand Casablanca</h3>
          <div className="orphoninat__item-cta">
            <h4>jzvefbqlb jqrbtreuaq </h4>
            <a href="" className='btn'>Découvrez plus</a>
          </div>
        </article>

        <article className="orpholinat__item">
          <div className="orpholinat__item-image">
            <img src={img1} alt="" />
          </div>
          <h3>Orphelinat du Grand Casablanca</h3>
          <div className="orphoninat__item-cta">
            <h4>jzvefbqlb jqrbtreuaq </h4>
            <a href="" className='btn'>Découvrez plus</a>
          </div>
        </article>
        
        
      </div>
    </section>
  )
}

export default Portfolio