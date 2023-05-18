import Imagen from '../imagenes/hamburguesa1.jpg'
import Imagen2 from '../imagenes/hamburguesa2.jpg'
import Imagen3 from '../imagenes/hamburguesa3.jpg'
import Imagen4 from '../imagenes/perro1.jpg'
import Imagen5 from '../imagenes/perro2.jpg'
import Imagen6 from '../imagenes/perro3.jpg'

function Menu() {
  return (
    <div className="row bg-danger">
      <h2>Menu</h2>
      <h2><br></br>Hamburguesas</h2>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <img src={Imagen}/>
          <div className="card-body">
            <h5 className="card-title">Hamburguesa Clásica</h5>
            <p className="card-text">Ingredientes: Carne de res, lechuga, tomate, cebolla, queso cheddar, salsas.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <img src={Imagen2}/>
          <div className="card-body">
            <h5 className="card-title">Hamburguesa Especial</h5>
            <p className="card-text">Ingredientes: Carne de res, lechuga, tomate, cebolla, queso cheddar, tocineta, salsas.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <img src={Imagen3}/>
          <div className="card-body">
            <h5 className="card-title">Hamburguesa BBQ</h5>
            <p className="card-text">Ingredientes: Carne de res, lechuga, tomate, tocineta, queso suizo, salsa BBQ.</p>
          </div>
        </div>
      </div>
      <h2><br></br>Perros</h2>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <img src={Imagen4}/>
          <div className="card-body">
            <h5 className="card-title">Perro Clasico</h5>
            <p className="card-text">Ingredientes: Salchicha, ensalada, queso mozarella, papa triturada, huevo de codorniz, salsas.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <img src={Imagen5}/>
          <div className="card-body">
            <h5 className="card-title">Perro Especial</h5>
            <p className="card-text">Ingredientes: Salchicha, ensalada, queso mozarella, tocineta, papa triturada, huevo de codorniz, salsas.</p>
          </div>
        </div>
      </div>
      <div className="col-lg-4 col-md-6 mb-4">
        <div className="card">
          <img src={Imagen6}/>
          <div className="card-body">
            <h5 className="card-title">Perro Ranchero</h5>
            <p className="card-text">Ingredientes: Salchicha ranchera, ensalada, queso mozarella, papa triturada, huevo codorniz, salsas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;