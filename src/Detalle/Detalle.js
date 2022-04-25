
import './Certificado.css'
import { getCertificadoById } from '../service/CertificadoService'
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function Detalle(props){

    const [certificado, setCertificado] = useState({});
    const { certificadoId } = useParams();     
    useEffect(() => {    
        getCertificadoById(certificadoId).then(data => {
          setCertificado(data);  
        }
        );
      }, [certificadoId]);

return(

    
        <div class="list-group">
          

  <a style={{backgroundColor:'#676766'}}  class="list-group-item list-group-item-action active" aria-current="true">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Certificado de {certificado.curso}  </h5>
      
    </div>
   
   
  </a>
         
  <a class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Cédula
      
      </h5>
      
    </div>
    <p> {certificado.cedula} </p> 
    
  </a>
  <a  class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Nombres</h5>
    </div>
      <p> {certificado.nombres} </p>
    
  </a>
  <a  class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Email</h5>
    </div>
      <p> {certificado.email} </p>
    
  </a>
  <a  class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Fechas</h5>
    </div>
      <p> {certificado.fechas} </p>
    
  </a>
  <a  class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Rol</h5>
    </div>
      <p> {certificado.rol} </p>
    
  </a>
  <a  class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Capacitador</h5>
    </div>
      <p> {certificado.capacitador} </p>
    
  </a>
  <a  class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Código </h5>
    </div>
      <p> {certificado.codigo} </p>
    
  </a>
  <a  class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Área </h5>
    </div>
      <p> {certificado.area} </p>
    
  </a>
  <a  class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Curso</h5>
    </div>
      <p> {certificado.curso} </p>
    
  </a>
  <a class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">objetivo</h5>
    </div>
      <p> {certificado.objetivo} </p>
    
  </a>
  <a  class="list-group-item list-group-item-action">
    <div class="d-flex w-100 justify-content-between">
      <h5 class="mb-1">Contenidos</h5>
    </div>
      <p> {certificado.contenidos} </p>
    
  </a>
        <Link to={`/certificados/`}>
        <button style={{backgroundColor:'#6c757d'}} type="button" class="btn btn-primary">Regresar</button>

        </Link>
        </div>

);

}
export default Detalle