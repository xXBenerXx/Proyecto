import React from 'react';
import { Link } from 'react-router-dom';
import Imagen from '../imagenes/hamburguesa1.jpg'
import Imagen7 from '../imagenes/kinglogo.png'

function Menunavegacion() {
  return (
    <div className="bg-danger">
      <div className="bg-dark">
        <ul className="nav justify-content-end">
          <li className="nav-item" class="">
            <Link to={"/"}  class="nav-link text-light" >Inicio</Link>
          </li>
          <li className="nav-item">
            <Link to={"/Menu"} class="nav-link text-light">Menu</Link>
          </li>
          <li className="nav-item">
            <Link to={"/Login"} class="nav-link text-light">Login</Link>
          </li>
          <li className="nav-item">
            <Link to={"/Contacto"} class="nav-link text-light">Contacto</Link>
          </li>
          <li className="nav-item">
            <Link to={"/ShoppingCart"} class="nav-link text-light">Carro de compra</Link>
          </li>
        </ul>
        
      </div>
        <img src={Imagen7}/>
    </div>
    );
}

export default Menunavegacion;