import './App.css'
import Navbar from './components/navbar'
import Cartwidget from './components/Cart'
import ItemListContainer from './components/ItemListContainer'
import { BrowserRouter, Routes, Route } from "react-router";
import { ItemDetail } from "./components/ItemDetail";



  function App() {
    return (
      <BrowserRouter>
        {/* Encabezado fijo */}
        <header className="navbar">
          <Navbar />
        </header>
  
 {/* Contenido que cambia según la ruta */}
 <main className="main-content">
        <Routes>
          <Route path="/" element={<ItemListContainer />} />
          <Route path="/categoria/:id" element={<ItemListContainer />} />
          <Route path="/product/:id" element={<ItemDetail />} />
        </Routes>
      </main>
    </BrowserRouter>
  );
}

export default App