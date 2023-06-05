import { Routes, Route } from "react-router-dom"
import { Container } from 'react-bootstrap'
import { Home } from './pages/Home'
import { Store } from './pages/Store'
import { About } from './pages/About'
import { Navbar } from './components/Navbar'
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { Checkout } from "./pages/Checkout"
import { Login } from "./pages/Login"
import { Register } from "./pages/Register"
import { AuthProvider } from "./context/AuthContext"
import { CategoryProvider } from "./context/HomeContext"



function App() {

  return (
    <ShoppingCartProvider>
      <AuthProvider>
        <Navbar />
        <Container className="mb-4">
          <CategoryProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Checkout" element={<Checkout />} />
              <Route path="/Store" element={<Store />} />
              <Route path="/About" element={<About />} />
              <Route path="/Login" element={<Login />} />
              <Route path="/Register" element={<Register />} />
            </Routes>
          </CategoryProvider>
        </Container>
      </AuthProvider>
    </ShoppingCartProvider>
  )
}

export default App
