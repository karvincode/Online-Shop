import { Routes, Route} from "react-router-dom"
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { About } from './pages/About'
import { Navbar } from './components/Navbar'
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { Checkout } from "./pages/Checkout"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import React, { useEffect, useState } from "react"


function App() {

  return (
    <ShoppingCartProvider>
    <Navbar />
   <Container className="mb-4">
      <Routes>
      <Route path="/" element={<Home />} /> 
      <Route path="/Checkout" element={<Checkout />} /> 
      <Route path="/Store" element={<Store />} />
      <Route path="/About" element={<About />} />
      <Route path="/Login" element={<Login />} />
      <Route path="/Register" element={<Register />} />
    </Routes>
   </Container>
   </ShoppingCartProvider>

  )
}

export default App
