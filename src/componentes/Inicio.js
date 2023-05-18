import React, { useState, useEffect } from 'react';
///import Carousel from '../componentes/Carousel';
import 'bootstrap/dist/css/bootstrap.css';
import Imagen8 from '../imagenes/hamburguesa4.jpg';
import Imagen9 from '../imagenes/hamburguesa5.jpg';
import Imagen10 from '../imagenes/perro4.jpg';

const Inicio = () => {
    return (
        <div className="container text-center">
          <div class="col order-1">
    
            <div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
              <div class="carousel-inner">
                <div className="carousel-item active">
                  <img src={Imagen8} class="rounded mx-auto d-block" ></img>
                </div>
                <div className="carousel-item">
                  <img src={Imagen9} class="rounded mx-auto d-block" ></img>
                </div>
                <div className="carousel-item">
                  <img src={Imagen10} class="rounded mx-auto d-block" ></img>
                </div>
              </div>
              <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
                <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                <span class="visually-hidden">Previous</span>
              </button>
              <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
                <span class="carousel-control-next-icon" aria-hidden="true"></span>
                <span class="visually-hidden" >Next</span>
              </button>
            </div>
          </div>
        </div>
    
      );
    }

export default Inicio;