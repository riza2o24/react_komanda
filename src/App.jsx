import { Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import Shop from "./components/shop/Shop"
import SinglePage from "./components/Muslimbek/SinglePage"
import { CartProvider } from "./context/CartContext" // <--- ADDED THIS IMPORT
import Compare from "./components/Shohruhbek/Compare"
import Checkout from "./components/alisher/Checkout"
import Contact from "./components/oysha/Contact"
import Blog from "./components/oysha/Blog"

function App() {
  return (
    <div>
      {/* Wrapped everything inside CartProvider to fix the useCart error */}
      <CartProvider> 
        <Routes>
          <Route element={<Shop/>} path="/shop"/>
          <Route element={<Home/>} path="/"/>
          <Route element={<SinglePage/>} path="/single/:id"/>
          <Route element={<Compare/>} path="/compare"/>
          <Route element={<Checkout/>} path='/alish'/>
          <Route element={<Contact/>}  path='/contact' />
          <Route element={<Blog/>}  path='/about' />
        </Routes>
      </CartProvider>
    </div>
  )
}

export default App
