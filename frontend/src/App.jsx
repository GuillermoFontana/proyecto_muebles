import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import Navbar from './components/Navbar.jsx'
import Footer from './components/Footer.jsx'

const App = () => (
  <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
)

export default App
