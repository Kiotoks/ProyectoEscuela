import Login from "./Componentes/Login/login";
import Año from "./Componentes/Años/Año";
import NavBar from "./Componentes/NavBar/NavBar";
import Primero from "./Componentes/Divisiones/Primero";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Segundo from "./Componentes/Divisiones/Segundo";
import Historial from "./Componentes/Historial/Historial";
function App() {
  return (

    <BrowserRouter>
  
         
          <Routes>
          <Route path="/" element={<Año/>} />
          <Route path="/Login" element={<Login/>} />
          <Route path="/Primero" element={<Primero/>} />
          <Route path="/Historial" element={<Historial/>} />
          </Routes>

    </BrowserRouter>
 /*    <div>
    

    </div> */
  );
}

export default App;
