import React from 'react'
import {Link,Route,BrowserRouter as Router,Routes } from 'react-router-dom'
import {useAuth} from "./ruteo/AuthContext"
import { auth } from './conexion/firebase'
import BarraRutasProtected from './ruteo/BarraRutasProtected'
import BarraRutasPublic from './ruteo/BarraRutasPublic'
import Home from './public/Home'
import Dashboard from './public/Dashboard'
import Noticias from './public/Noticias'
import Informacion from './public/Informacion'
import 'react-toastify/dist/ReactToastify.css'
import {toast} from 'react-toastify'
import {ToastContainer} from 'react-toastify'

const App = () => {
  const {user} = useAuth();

  return (
    <div>
      
      <Router>
      {user ? <BarraRutasProtected/>:<BarraRutasPublic/>}
        
      </Router>

     
    </div>
  )
}

export default App
