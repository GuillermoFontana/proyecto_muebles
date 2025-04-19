import React from 'react'
import { Link } from 'react-router-dom'

const App = () => (
  <div>
    <h1>Inicio</h1>
    <nav>
      <Link to="/productos">Productos</Link> | <Link to="/nosotros">Nosotros</Link> | <Link to="/contacto">Contacto</Link>
    </nav>
  </div>
)

export default App
