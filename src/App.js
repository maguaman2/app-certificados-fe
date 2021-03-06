import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.css';
import CertificadoPage from './Certificados/CertificadoPage';
import Navbar from "./components/Navbar";
import Loading from "./components/Loading";
import CertificadoDetalle from './Certificados/CertificadoDetalle';
import SubirCertificado from "./Certificados/SubirCertificado";
import CertificadoPageUpdate from "./update/CertificadoPageUpdate";
import CertificadoUpdate from "./update/CertificadoUpdate";
import Login from './Login/Login';
//import 'bootstrap/dist/css/bootstrap.min.css';

function App () {

  return (
      
    <BrowserRouter>
    <Navbar />
      <Routes>
        <Route path="/certificados" element={<CertificadoPage />} />
      <Route path="/detalle/:certificadoId" element={<CertificadoDetalle />} />
      <Route path="/certificadoupdate/:certificadoId" element={<CertificadoUpdate />} />
     <Route path="/subircertificado" element={<SubirCertificado/>}/>
     <Route path="/certificadopageupdate" element={<CertificadoPageUpdate/>}/>
     <Route path="/login" element={<Login/>}></Route>
      </Routes>
      
    </BrowserRouter>   
  );
}

export default App;