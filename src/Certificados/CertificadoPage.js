import React, { useState, useEffect } from "react";

import CertificadoList from './CertificadoList';
import Certificado from './Certificado'
import { getListCertificados,searchCertificado } from '../service/CertificadoService'
//import axios from "axios";

function CertificadoPage() {

  const [teachers, setTeachers] = useState([]);
  const [cedula, setCedula] = useState("");
 // const [archivos, setArchivos] = useState(null);

  //const subirArchivos=e=>{
    //setArchivos(e);}

  //const insertarArchivos= async()=>{
    //const f = new FormData();

   // for (let index = 0; index < archivos.length; index++) {
     // f.append("files", archivos[index]);
      
    /*}
    await axios.post("",f)
    .then(Response=>{
console.log(response.data);
    }).catch(error=>{
      console.log(error);
    })

  }*/

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
    <div>
      <h2>Lista de docentes</h2>


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
  );

 
}

export default CertificadoPage;