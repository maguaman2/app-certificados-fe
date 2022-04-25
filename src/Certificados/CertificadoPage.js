import React, { useState, useEffect } from "react";

import CertificadoList from './CertificadoList';
import Certificado from './Certificado'
import { getListCertificados,searchCertificado } from '../service/CertificadoService'
//import axios from "axios";

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

  const onChange = (event) =>{
    if(event.target.name==='cedula')
    {
    setCedula(event.target.value)
    }
  }

  return (
    <div  style={{ marginLeft: "center" }}>
      <h2 >CERTIFICADOS</h2>
      <div className="fnd">

       <form  style={{ marginLeft: "70px" }} onSubmit={onSubmit}  className="busqueda">

     <label className="margin" htmlFor="text-search" > </label>
      <input 
       id="text-search"
       placeholder="Busqueda por Cedula"
       type="search"
       name="cedula"
       value={cedula}
       onChange={onChange}/>
       
    <input   type="submit" value="Buscar"/>
</form>
      <CertificadoList>
        {
          teachers.map(item =>
            <Certificado
              key={item.id}
              itemTeacher={item} />
          )
        }
      </CertificadoList>
      </div>


     
    </div>
  );

 
}

export default CertificadoPage;