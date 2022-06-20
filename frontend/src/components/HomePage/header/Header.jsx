import React from 'react';
import './header.css'
import CTA from './CTA'
import COVER from '../../../images/cover.png'
import { NavLink } from "react-router-dom";
// const Header = () => {
class Header extends React.Component {
    render() {
  return (
    <header>
      <div className="brand">
        <NavLink to="/">ORPHOME</NavLink>
      </div>
      <div className="nav">
        <nav>
          <ul>
            <li exact={true} activeClassName='active'><NavLink to="/">Accueil</NavLink></li>
            <li exact={true} activeClassName='active'><NavLink to="/orpholinat">Orphelinat</NavLink></li>
            <li exact={true} activeClassName='active'><NavLink to="/about">À prorps</NavLink></li>
            <li exact={true} activeClassName='active'><NavLink to="/contact">Contact</NavLink></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
}

export default Header