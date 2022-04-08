import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import Certificado from "../Certificados/Certificado";
import { updateCertificado } from '../service/CertificadoService'
import './Certificado.css'

function TeachersPage() {
  
  const { certificadoId } = useParams();
  const [certificado] = useState({nombres:'',apellidos:'',correo:''});

  const onSubmit = (event) => {
    event.preventDefault();
    updateCertificado(certificadoId);
  }
  const onChange = (event) =>{
    if(event.target.name==='cedula')
      setTeacher({...teacher,nombres:event.target.value})    
    if(event.target.name==='nombres')    
      setTeacher({...teacher,apellidos:event.target.value})
    if(event.target.name==='email')
      setTeacher({...teacher,correo:event.target.value})
    if(event.target.name==='fechas')
      setTeacher({...teacher,correo:event.target.value})
    if(event.target.name==='rol')
      setTeacher({...teacher,correo:event.target.value})
    if(event.target.name==='capacitador')
      setTeacher({...teacher,correo:event.target.value})
    if(event.target.name==='codigo')
      setTeacher({...teacher,correo:event.target.value})
    if(event.target.name==='area')
      setTeacher({...teacher,correo:event.target.value})
    if(event.target.name==='curso')
      setTeacher({...teacher,correo:event.target.value})
    if(event.target.name==='objetivo')
      setTeacher({...teacher,correo:event.target.value})
    if(event.target.name==='contenidos')
      setTeacher({...teacher,correo:event.target.value})      
  }

  useEffect(() => {    
    findByIdTeacher(certificadoId).then(data => {
      setTeacher(data);  
    }
    );
  }, [certificadoId]);

  return (
    <div className="boxUpdate">
      <form onSubmit={onSubmit} className="boxFormUpdate">
      <h2>Actulizar profesor</h2>
  
          <input 
          className="formUpdateInput"
            name="Cedula"
            placeholder="cedula" 
            value={certificado.cedula}
            onChange={onChange}
   
          />
  
          <input 
           className="formUpdateInput"
           placeholder="Nombres" 
            name="nombres"
            value={certificado.nombres}
            onChange={onChange}
          />
        
          <input 
           className="formUpdateInput"
           placeholder="Email"
            name="email"
            value={certificado.email}
            onChange={onChange}
          />

          <input 
           className="formUpdateInput"
           placeholder="Fechas"
            name="fechas"
            value={certificado.fechas}
            onChange={onChange}
          />

          <input 
           className="formUpdateInput"
           placeholder="Rol"
            name="rol"
            value={certificado.rol}
            onChange={onChange}
          />

          <input 
           className="formUpdateInput"
           placeholder="Capacitador"
            name="capacitador"
            value={certificado.capacitador}
            onChange={onChange}
          />

          <input 
           className="formUpdateInput"
           placeholder="Codigo"
            name="codigo"
            value={certificado.codigo}
            onChange={onChange}
          />

          <input 
           className="formUpdateInput"
           placeholder="Area"
            name="area"
            value={certificado.area}
            onChange={onChange}
          />

          <input 
           className="formUpdateInput"
           placeholder="Curso"
            name="curso"
            value={certificado.curso}
            onChange={onChange}
          />

            <input 
           className="formUpdateInput"
           placeholder="Objetivo"
            name="Objetivo"
            value={certificado.objetivo}
            onChange={onChange}
          />

          <input 
           className="formUpdateInput"
           placeholder="Contenidos"
            name="contenidos"
            value={certificado.contenidos}
            onChange={onChange}
          />


        

        <button type="submit" className="formUpdateBtn">Guardar</button>

      </form>
      
    </div>
  );
}

export default CertificadoPage;