import React from "react";
import './hero.css';
import COVER from '../../../images/cover.png'
export default class HeroHeader extends React.Component{
    render(){
        return(
           <div className="hero-header" style={{ backgroundImage:`url(${COVER})` }}>
                <div className="content">
                    <div className="">
                        <span className="slug">L'autre maison pour nos enfants</span>
                        <h1 className="title">ORPHOME</h1>
                        <p className="desc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Blanditiis nisi odit fugit doloremque eveniet recusandae deserunt numquam maiores fugiat nostrum sunt quasi fuga, voluptatum dignissimos consequatur, nam omnis eius ea.</p>
                        <a href="#" className="button">Découvrez plus</a>
                    </div>
                </div>
                <div className="image" style={{ backgroundImage:`url(${COVER})` }}></div>
           </div>
        )
    }
}