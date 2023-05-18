import React from 'react';
//import {Carousel} from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Imagen8 from '../imagenes/hamburguesa4.jpg';
import Imagen9 from '../imagenes/hamburguesa5.jpg';
import Imagen10 from '../imagenes/perro4.jpg';
import 'bootstrap/dist/css/bootstrap.css';

const Carousel = () =>{
    return(
        <div>
            <div id="carouselExampleCaptions" className="carousel slide">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner; bg-info">
                    <div className="carousel-item active">
                        <img src={Imagen8} className="d-block w-100" alt="Imagen8"/>
                    </div>
                    <div className="carousel-item active">
                        <img src={Imagen9} className="d-block w-100" alt="Imagen9"/>
                    </div>
                    <div className="carousel-item active">
                        <img src={Imagen10} className="d-block w-100" alt="Imagen10"/>
                    </div>
                </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
    )
}

export default Carousel;