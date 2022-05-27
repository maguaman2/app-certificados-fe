import React, { useState } from "react";
import CertificadoList from './CertificadoList';
import Certificado from './Certificado'
import { searchCertificado } from '../service/CertificadoService'
import './Footer.css'
import './Certificado.css'

function CertificadoPage() {
  const [teachers, setTeachers] = useState([]);
  const [cedula, setCedula] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    searchCertificado(cedula).then(data => {
      console.log(data);
      setTeachers(data);
    });
  }

  const onChange = (event) => {
    if (event.target.name === 'cedula') {
      setCedula(event.target.value)
    }
  }

  return (
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
            <input type="submit" value="Buscar" className="primary-button search-button"/>
          </form>
          {teachers.length !==0 &&     <CertificadoList>
            {
              teachers.map(item =>
                <Certificado
                  key={item.id}
                  itemTeacher={item} />
              )
            }
          </CertificadoList>  }
             
      </div>  
    </div>
  );
}

export default CertificadoPage;