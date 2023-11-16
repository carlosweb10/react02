import React from 'react'
import { Routes, Route, Link, Outlet, Switch, Redirect} from 'react-router-dom';

import { useAuth } from './AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import "./BarraNavegacion.css";
import { useNavigate } from 'react-router-dom';
import "./BarraNavegacion.css"
import Home from '../public/Home';
import LoginForm from '../login/LoginForm';
import Informacion from '../public/Informacion';
import Noticias from '../public/Noticias';
import Contacto from '../public/Contacto';


const BarraRutasPublic = () => {
    const { user } = useAuth();
    const auth = getAuth();
    const navigate = useNavigate();
  
    const handleSignOut = () => {
      if (user) {
        signOut(auth)
          .then(() => {
            // Cierre de sesión exitoso
            navigate('/home'); // Redirigir a ruta /home
          })
          .catch((error) => {
            console.error('Error al cerrar sesión:', error);
          });
      }
    }

    return (
      
      <div>
        <h2>Carlos Andres Calvo Ticona</h2>
        <nav>
          <div id="login">
            <ul>
              <li><Link to="/nuevoregistro">Registrar</Link></li>
  
              {user ? (         ////////  Para cerrar sesión   ///////////
                <li><Link onClick={handleSignOut} > Cerrar sesión </Link> </li> 
                ) : (
                <li> <Link to="/Iniciarsesion">Iniciar sesión</Link> </li>
              )}
              
            </ul>
          </div>
          
          <div id="menu">
            <ul>
              <li><Link to="/home">Home</Link> </li>
              <li><Link to="/informacion">Informacion</Link></li>
              <li><Link to="/noticias">Noticias</Link></li>
              <li><Link to="/contacto">Contacto</Link></li>

            </ul>
          </div>
        </nav>
  
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/iniciarsesion" element={<LoginForm/>}/>
          <Route path='/informacion' element={<Informacion/>}/>
          <Route path='/noticias' element={<Noticias/>}/>
          <Route path='/contacto' element={<Contacto/>}/>
        </Routes> 
      </div>
    )
}

export default BarraRutasPublic;

/*
  
                {user ? (         ////////  Para cerrar sesión   ///////////
                <li><Link onClick={handleSignOut} > Cerrar sesión </Link> </li> 
                ) : (
                <li> <Link to="/Iniciarsesion">Iniciar sesión</Link> </li>
              )}
  
  
  /*


/*
const handleSignOut = () => {
    if (user) {
      signOut(auth)
        .then(() => {
          // Cierre de sesión exitoso
          navigate('/home'); // Redirigir a ruta /home
        })
        .catch((error) => {
          console.error('Error al cerrar sesión:', error);
        });
    }
  }
*/

