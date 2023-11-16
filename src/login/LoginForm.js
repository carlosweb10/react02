import React, { useState } from 'react';
import { useAuth } from '../ruteo/AuthContext'; // (7). Importando contexto
import { useNavigate } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer, toast } from "react-toastify";
function LoginForm() {
  
  const { signIn,user, } = useAuth();                 // (7). Usando el contexto

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  
  const navigate = useNavigate();

  const handleSignIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Por favor, completa ambos campos.');
      return;
    }

    try {
      await signIn(email, password);
      // Inicio de sesión exitoso: limpiar el error
      setError(null);
      navigate('/sistema-crud'); // Redirigir a ruta /sistema-crud
    } catch (error) {
      setError('Error al iniciar sesión: ' + error.message);
    }
  }

  return (
    
    <div className='card card-body'>
    <div className='card bs-secondary p-3 mt-3'>
      
      <h2  className='col-md-12 p-2'  >Iniciar Sesión</h2>

      <form onSubmit={handleSignIn}>
      <div className='form-group input-group'>
          <label id="file" className='form-control float-start'>Email</label>
      </div>
      
      <div className='form-group input-group'>
          <input className='form-control float-start' type='email' placeholder='Email...'  
            value={email} onChange={(e) => setEmail(e.target.value)} />
      </div>

      <div className='form-group input-group'>
          <label id="file" className='form-control float-start'>Contraseña</label>
      </div>
      
      <div className='form-group input-group'>
          <input className='form-control float-start' type='password' placeholder='Contraseña...'  
            value={password} onChange={(e) => setPassword(e.target.value)} />
      </div>
        {error && <p style={{ color: 'red' }}>{error}</p>}
  
        <button className='btn btn-primary btn-block' type="submit">Iniciar Sesión</button>
      </form>
      </div>
    </div>
  );
}

export default LoginForm;


/*
const handleSignIn = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError('Por favor, completa ambos campos.');
      return;
    }

    try {
      await signIn(email, password);
      // Inicio de sesión exitoso: limpiar el error
      setError(null);
      navigate('/sistema-crud'); // Redirigir a ruta /sistema-crud
    } catch (error) {
      setError('Error al iniciar sesión: ' + error.message);
    }
  }
*/
