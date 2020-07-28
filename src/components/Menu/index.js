import React from 'react';
import Logo from '../../assets/img/brunoflix.png';
import './Menu.css';
// import ButtonLink from './components/ButtonLink';
import Button from '../Button';
function Menu(){
  return (
    <nav className="Menu">
      <a href="/">
      <img className="Logo" src={Logo} alt="Bruno Flix logo"/>
      </a>

      <Button as="a" className="ButtonLink" href="/">
        Novo Video aqui 
      </Button>
    </nav>
  );
}

export default Menu;