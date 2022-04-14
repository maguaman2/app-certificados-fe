import React, { useState, useEffect } from "react";

import CertificadoView from './CertificadoView'
import { getListCertificados,searchCertificado } from '../service/CertificadoService'
import CertificadoListUpdate from "./CertificadoListUpdate";
//import axios from "axios";

function CertificadoPageUpdate() {

  const [teachers, setTeachers] = useState([]);
  const [cedula, setCedula] = useState("");
 

  const onSubmit = (event) => {
    event.preventDefault();
    searchCertificado(cedula).then(data => {
      console.log(data);
      setTeachers(data);
    });
  }

  const onChange = (event) =>{
    if(event.target.name==='cedula')
    {
    setCedula(event.target.value)
    }
  }

  return (
    <div  style={{ textAlign: "center" }}>
      <h2 className="h2">Editar Certificados</h2>


       <form  onSubmit={onSubmit}  className="busqueda">
     <label htmlFor="text-search" > </label>
      <input 
       id="text-search"
       placeholder="Busqueda por Cedula"
       type="search"
       name="cedula"
       value={cedula}
       onChange={onChange}/>
       
    <input   type="submit" value="Buscar"/>
</form>
     
      <CertificadoListUpdate>
        {
          teachers.map(item =>
            <CertificadoView
              key={item.id}
              itemTeacher={item} />
          )
        }
      </CertificadoListUpdate>
    </div>
  );

 
}

export default CertificadoPageUpdate;