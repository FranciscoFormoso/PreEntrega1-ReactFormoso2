import React from 'react';
import './NavBar.css';
import Cartwidget from './Cartwidget.jsx'; 

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul>
        <li><a href="/">Inicio</a></li>
        <li><a href="/productos">Productos</a></li>
        <li><a href="/contacto">Contacto</a></li>
        <li><Cartwidget /></li> 
      </ul>
    </nav>
  );
}

export default NavBar;

