import React, { useState } from 'react';
import { useAuth } from '../ruteo/AuthContext';
import { useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify"; 

// Para verificar que no registre con el mismo correo
import { getDoc, doc } from 'firebase/firestore';
import { auth, db } from '../conexion/firebase';

function RegisterForm() {

  const { register } = useAuth();             // Registra usuario
  
  const [email, setEmail] = useState('');       // Variables para correo
  const [password, setPassword] = useState(''); // Variable para password
  
  const navigate = useNavigate();               // Navegación

  const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await register(email, password);
      //await registerUser(email, password);    // Verifica correo ya registrado
      navigate('/iniciarsesion'); // Redirigir a ruta /iniciarsesion
      //console.log("Se registro usuario...xxx");
    } catch (error) {
      console.error('Error al registrar usuario:', error.message);
    }
  }

  return (
    <div className='card card-body'>
    <div className='card bs-secondary p-3 mt-3'>
      <h2 className='col-md-12 p-2' >Registro de Nuevo Usuario</h2>
      <form onSubmit={handleRegister}>
      <div className='form-group input-group'>
          <label id="file" className='form-control float-start'>Email</label>
      </div>
      <div className='form-group input-group'>
          <input className='form-control float-start'type="email" 
            value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>
      <div className='form-group input-group'>
          <label id="file" className='form-control float-start'>Contraseña</label>
      </div>
      <div className='form-group input-group'>
          <input className='form-control float-start' type='password'  
            value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
        <button className='btn btn-primary btn-block' type="submit">Registrarse</button>
      </form>
      </div>
    </div>
  );
}

export default RegisterForm;

/*
const handleRegister = async (e) => {
    e.preventDefault();

    try {
      await register(email, password);
      //await registerUser(email, password);    // Verifica correo ya registrado
      navigate('/iniciarsesion'); // Redirigir a ruta /iniciarsesion
      console.log("Se registro usuario...xxx");
    } catch (error) {
      console.error('Error al registrar usuario:', error.message);
    }
  }
*/