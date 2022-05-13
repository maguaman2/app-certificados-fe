import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import CertificadoPage from './Certificados/CertificadoPage';
import Navbar from "./components/Navbar";
import Detalle from './Detalle/Detalle';
import SubirCertificado from "./Certificados/SubirCertificado";
import CertificadoPageUpdate from "./update/CertificadoPageUpdate";
import CertificadoUpdate from "./update/CertificadoUpdate";
import Login from './Login/Login';

import Footer from "./components/Footer";
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
     <Route path="/login" element={<Login/>}></Route>
      </Routes>
      <Footer>

      </Footer>
    </BrowserRouter>   
  );
}

export default App;