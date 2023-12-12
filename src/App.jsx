import { Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home.jsx"
import List from "./pages/list/List.jsx"
import Hotel from "./pages/hotel/Hotel.jsx";
import Login from "./pages/login/Login.jsx";





function App() {

  return (
 <Routes>
   <Route path="/" element={<Home/>}/>
   <Route path="/hotels" element={<List/>}/>
   <Route path="/hotels/:id" element={<Hotel/>}/>
   <Route path="/login" element={<Login/>}/>
   </Routes>
  )
}

export default App




