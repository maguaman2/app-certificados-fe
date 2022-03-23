import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import CertificadoPage from './Certificados/CertificadoPage';
import Navbar from "./components/Navbar";
import Detalle from './Detalle/Detalle';
function App () {

  return (
      
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/certificados" element={<CertificadoPage />} />
      <Route path="/detalle/:certificadoId" element={<Detalle />} />
     
      </Routes>
    </BrowserRouter>   
  );
}

export default App;