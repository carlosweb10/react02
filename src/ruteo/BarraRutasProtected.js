import { Routes, Route, Outlet, Switch, Redirect} from 'react-router-dom';

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import { getAuth, signOut } from 'firebase/auth';
import "./BarraNavegacion.css";
import { useNavigate } from 'react-router-dom';

///////////////// PROTEGIDA - SistemaCRUD //////////////
import SistemaCRUD from '../protegido/SistemaCRUD';
import ListaDeAlumnos from '../protegido/sistemacrud/ListaDeAlumnos';

///////////////// PROTEGIDA - SistemaFILE //////////////
import SistemaFILE from '../protegido/SistemaFILE';
import Fotos from '../protegido/sistemafile/Fotos';

//////////////////////// PAG. PUBLICOS /////////////////
import RegisterForm from '../login/RegisterForm';
import LoginForm from '../login/LoginForm';
import AppLista from '../protegido/sistemacrud/AppLista';
import ListaDeProfesores from '../protegido/sistemacrud/ListaDeProfesores';
import Documentos from '../protegido/sistemafile/Documentos';
import Videos from '../protegido/sistemafile/Videos';
import DocPDF from '../protegido/sistemafile/DocPDF';
import ListaDeDeportes from '../protegido/sistemacrud/ListaDeDeportes';
import ListaDeCarreras from '../protegido/sistemacrud/ListaDeCarreras';
import ListadeEgresados from '../protegido/sistemacrud/ListadeEgresados';

const BarraRutasProtected = () => {
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
        <nav>
          <div id="login">
            <ul>
            {user ? (         ////////  Para cerrar sesión   ///////////
                <li><Link onClick={handleSignOut} > Cerrar sesión </Link> </li> 
                ) : (
                <li> <Link to="/iniciarsesion">Iniciar sesión</Link> </li>
              )}

              <li><Link to="/nuevoregistro">Registrar</Link></li>

              {user ? (         ////////  Usuario autenticado  ///////////
                <li>Usuario autenticado: <span> {user.email}</span> </li> 
                ) : (
                null
              )}
            </ul>
          </div>
              
          <div id="menu">
            <ul>

              <li><Link to="/sistema-crud/carreras">Carreras</Link> </li>
              <li><Link to="/sistema-crud/deportes">Deportes</Link> </li>
              <li><Link to="/sistema-crud/egresados">Egresados</Link> </li>
              <li><Link to="/sistema-crud/applista">Alumnos (applista)</Link> </li>

              <li><Link to="/sistema-file/videos">Videos</Link> </li>  
              <li><Link to="/sistema-file/fotos">Fotos</Link> </li>
              <li><Link to="/sistema-file/docpdf">Doc.PDF</Link> </li>
              <li><Link to="/sistema-file/docword">Doc.Word</Link> </li>
            </ul>
          </div>
        </nav>
  
        <Routes>

          <Route path="/iniciarsesion" element={<LoginForm />} />
          <Route path="/nuevoregistro" element={<RegisterForm />} />
          

          
          <Route path="/sistema-crud" element={<MarcoParaSistemaCRUD />}>
            <Route index element={<SistemaCRUD />} />
            <Route path="applista" element={<AppLista />} />
          </Route>
          <Route path="/sistema-crud" element={<MarcoParaSistemaCRUD />}>
            <Route index element={<SistemaCRUD />} />
            <Route path="egresados" element={<ListadeEgresados/>} />
          </Route>
          <Route path="/sistema-crud" element={<MarcoParaSistemaCRUD />}>
            <Route index element={<SistemaCRUD />} />
            <Route path="deportes" element={<ListaDeDeportes/>} />
          </Route>
          <Route path="/sistema-crud" element={<MarcoParaSistemaCRUD />}>
            <Route index element={<SistemaCRUD />} />
            <Route path="carreras" element={<ListaDeCarreras/>} />
          </Route>
          

          <Route path="/sistema-file" element={<MarcoParaSistemaFILE />}>
            <Route index element={<SistemaFILE />} />
            <Route path="fotos" element={<Fotos />} />
          </Route>
          <Route path="/sistema-file" element={<MarcoParaSistemaFILE />}>
            <Route index element={<SistemaFILE />} />
            <Route path="docpdf" element={<DocPDF />} />
          </Route>
          <Route path="/sistema-file" element={<MarcoParaSistemaFILE />}>
            <Route index element={<SistemaFILE />} />
            <Route path="videos" element={<Videos />} />
          </Route>
          <Route path="/sistema-file" element={<MarcoParaSistemaFILE />}>
            <Route index element={<SistemaFILE />} />
            <Route path="docword" element={<Documentos />} />
          </Route>
  
        </Routes>        
      </div>
    )
}

export default BarraRutasProtected;

function MarcoParaSistemaCRUD() {
    return (
      <div>
        <h1>Marco sistema CRUD</h1>
        < Outlet /> {/* Aquí se mostrarán las rutas secundarias */}
      </div>
    );
  }
  
function MarcoParaSistemaFILE() {
    return (
      <div style={{background:"slateblue", padding:"10px"}}>
        <h1>Marco Sistema FILES</h1>
        < Outlet /> {/* Aquí se mostrarán las rutas secundarias */}
      </div>
    );
}
  


  
  /*
  
                {user ? (         ////////  Para cerrar sesión   ///////////
                <li><Link onClick={handleSignOut} > Cerrar sesión </Link> </li> 
                ) : (
                <li> <Link to="/iniciarsesion">Iniciar sesión</Link> </li>
              )}

              <li><Link to="/nuevoregistro">Registrar</Link></li>

              {user ? (         ////////  Usuario autenticado  ///////////
                <li>Usuario autenticado: <span> {user.email}</span> </li> 
                ) : (
                null
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
  
