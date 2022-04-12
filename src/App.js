import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import CertificadoPage from './Certificados/CertificadoPage';
import Navbar from "./components/Navbar";
import Detalle from './Detalle/Detalle';
import SubirCertificado from "./Certificados/SubirCertificado";
import CertificadoPageUpdate from "./update/CertificadoPageUpdate";
import CertificadoUpdate from "./update/CertificadoUpdate";
function App () {

  return (
      
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/certificados" element={<CertificadoPage />} />
      <Route path="/detalle/:certificadoId" element={<Detalle />} />
      <Route path="/certificadoupdate/:certificadoId" element={<CertificadoUpdate />} />
     <Route path="/subircertificado" element={<SubirCertificado/>}/>
     <Route path="/certificadopageupdate" element={<CertificadoPageUpdate/>}/>
      </Routes>
    </BrowserRouter>   
  );
}

export default App;