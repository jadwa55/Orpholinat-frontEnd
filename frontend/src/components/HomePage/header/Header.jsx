import React from 'react';
import './header.css'
import CTA from './CTA'
import COVER from '../../../images/cover.png'

// const Header = () => {
class Header extends React.Component {
    render() {
  return (
    <header>
      <div className="brand">
        <a href="#">ORPHOME</a>
      </div>
      <div className="nav">
        <nav>
          <ul>
            <li className="active" ><a href="#">Accueil</a></li>
            <li><a href="#">Orphelinat</a></li>
            <li><a href="#">À prorps</a></li>
            <li><a href="#">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
}

export default Header