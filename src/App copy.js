import React from 'react'
import { BrowserRouter as Router, Routes } from 'react-router-dom'

const App = () => {
  return (
    <div style={{background:"violet"}}>
      <Roter>
        <nav>
          <ul>

            <li><Link to = "/dashboard">Pasar a Dashboard</Link></li>
            <li><Link to= "/home">Pasar a Home</Link></li>
          </ul>
        </nav>
      </Roter>
      
      <Routes>
      </Routes>
      <Router>


      </Router>
    </div>
  )
}

export default App
