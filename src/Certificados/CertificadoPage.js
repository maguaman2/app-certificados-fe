import React, { useState, Fragment,  } from "react";
import CertificadoList from './CertificadoList';
import Certificado from './Certificado'
import Footer from '../components/Footer'
import { searchCertificado } from '../service/CertificadoService'
import './Certificado.css';

import { Modal } from "../components/Modal";
import { MainContext } from "../context/MainContext";
import CertificadoDetalle from "./CertificadoDetalle";



function CertificadoPage() {
  const [certificados, setCertificados] = useState([]);
  const [cedula, setCedula] = useState("");
  
  const onSubmit = (event) => {
    event.preventDefault();
    searchCertificado(cedula).then(data => {
      console.log(data);
      setCertificados(data);
    });
  }

  const onChange = (event) => {
    if (event.target.name === 'cedula') {
      setCedula(event.target.value)
    }
  }


  

  return (
    <Fragment>
      <div className="search">
        <div className="search-container">
          <h2 className="tittle">CERTIFICADOS</h2>
          <p className="subtittle">Búsqueda de certificados por cédula de identidad</p>
          <form onSubmit={onSubmit} className="search-form">

            <input
              id="input"
              placeholder="Cédula"
              type="text"
              name="cedula"
              value={cedula}
              onChange={onChange}
              className="search-input"
            />
          
          </form>
          </div>
     
        <div className="results-container">
        {certificados.length !== 0 ? <CertificadoList cedula={cedula}>
            {
              certificados.map(item =>
                <Certificado
                  key={item.id}
                  itemCertificado={item} />
              )
            }
          </CertificadoList>
            : <p>Búsqueda sin resultados</p>
          }
        </div>
      </div>
      <Footer />
    </Fragment>
  );
}


export default CertificadoPage;