import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Inicio from './componentes/Inicio';
import Menu from './componentes/Menu';
import Login from './componentes/Login';
import Contacto from './componentes/Contacto';
import Menunavegacion from './componentes/Menunavegacion';
import { Carousel } from 'react-responsive-carousel';
import ShoppingCart from './componentes/ShoppingCart';

function App() {
  return (
    <div>
        <Router>
          <Menunavegacion/>
          <Routes>
            <Route path="/" element={<Inicio/>}/>
            <Route path="/Menu" element={<Menu/>}/>
            <Route path="/Login" element={<Login/>}/>
            <Route path="/Contacto" element={<Contacto/>}/>
            <Route path="/Carousel" element={<Carousel/>}/>
            <Route path="/ShoppingCart" element={<ShoppingCart/>}/>
          </Routes>
        </Router>

    </div>
  );
}

export default App;