import { Route, Routes } from "react-router-dom"
import Home from "./components/home/Home"
import Shop from "./components/shop/Shop"

function App() {
  return (
    <div>
          <Routes>
            <Route element={<Shop/>} path="/shop"/>
            <Route element={<Home/>} path="/"/>
          </Routes>
    </div>
  )
}

export default App
