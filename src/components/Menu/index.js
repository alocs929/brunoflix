import React from 'react';
import Logo from '../../assets/img/brunoflix.png';
import './Menu.css';
import {Link} from 'react-router-dom';

import Button from '../Button';
function Menu(){
  return (
    <nav className="Menu">
      <Link to="/">
        <img className="Logo" src={Logo} alt="Bruno Flix logo"/>
      </Link>

      <Button as={Link} className="ButtonLink" to="/cadastro/video">
        Novo Video aqui 
      </Button>
    </nav>
  );
}

export default Menu;