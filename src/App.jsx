import { Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import Shop from "./components/shop/Shop"
import SinglePage from "./components/Muslimbek/SinglePage"
import { CartProvider } from "./context/CartContext" // <--- ADDED THIS IMPORT
import Compare from "./components/Shohruhbek/Compare"

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
        </Routes>
      </CartProvider>
    </div>
  )
}

export default App
