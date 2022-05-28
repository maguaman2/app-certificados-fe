import React, { useState, Fragment } from "react";
import CertificadoList from './CertificadoList';
import Certificado from './Certificado'
import Footer from '../components/Footer'
import { searchCertificado } from '../service/CertificadoService'
import './Certificado.css'

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
          <p className="subtittle">Busqueda de certificados por cedula de identidad</p>
          <form onSubmit={onSubmit} className="search-form">

            <input
              id="input"
              placeholder="Cedula"
              type="text"
              name="cedula"
              value={cedula}
              onChange={onChange}
              className="search-input"
            />
            <input type="submit" value="Buscar" className="primary-button search-button" />
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
            : <p>Busqueda sin resultados</p>
          }

        </div>
      </div>
      <Footer />
    </Fragment>
  );
}

export default CertificadoPage;