import { Route, Routes } from 'react-router-dom'
import './App.css'
import { Header } from './Components/Header/Header'
import { Landing } from './Pages/Landing/Landing'
import { ProductListing } from './Pages/ProductListing/ProductListing'
import { Cart } from './Pages/Cart/Cart'
import { Wishlist } from './Pages/Wishlist/Wishlist'
import { Login } from './Pages/Login/Login'
import { Signup } from './Pages/Signup/Signup'

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path = "/" element = {<Landing />} />
        <Route path = "/product" element = {<ProductListing />} />
        <Route path = "/cart" element = {<Cart />} />
        <Route path = "/wishlist" element = {<Wishlist />} />
        <Route path = "/login" element = {<Login />} />
        <Route path = "/signup" element = {<Signup />} />
      </Routes>
    </div>
  )
}

export default App
