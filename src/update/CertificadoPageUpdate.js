import React, { useState } from "react";

import CertificadoView from './CertificadoView'
import { searchCertificado } from '../service/CertificadoService'
import CertificadoListUpdate from "./CertificadoListUpdate";
import './CertificadoUpdate.css'

function CertificadoPageUpdate() {

  const [certificados, setCertificados] = useState([]);
  const [cedula, setCedula] = useState("");
 

  const onSubmit = (event) => {
    event.preventDefault();
    searchCertificado(cedula).then(data => {
      console.log(data);
      setCertificados(data);
    });
  }

  const onChange = (event) =>{
    if(event.target.name==='cedula')
    {
    setCedula(event.target.value)
    }
  }

  return (
    <div className="search">
      <div className="search-container">
        <h2 className="tittle">EDITAR CERTIFICADOS</h2> 
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
            <input type="submit" value="Buscar" className="primary-button search-button"/>
          </form>
          {certificados.length !==0 &&     <CertificadoListUpdate>
            {
              certificados.map(item =>
                <CertificadoView
                  key={item.id}
                  itemTeacher={item} />
              )
            }
          </CertificadoListUpdate>  }
             
      </div>  
    </div>
  );

 
}

export default CertificadoPageUpdate;