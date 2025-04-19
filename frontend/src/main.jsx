import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import App from './App.jsx'
import Home from './pages/Home.jsx'
import Productos from './pages/Productos.jsx'
import Nosotros from './pages/Nosotros.jsx'
import Contacto from './pages/Contacto.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />}>
          <Route index element={<Home />} />
          <Route path="productos" element={<Productos />} />
          <Route path="nosotros" element={<Nosotros />} />
          <Route path="contacto" element={<Contacto />} />
        </Route>
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)