
import './Certificado.css'
import { getCertificadoById } from '../service/CertificadoService'
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import correo from './imgs/correo.png'; // Tell webpack this JS file uses this image
import facebook from './imgs/facebook.png';
import instagram from './imgs/instagram.png';
import marcador from './imgs/marcador.png';
import suda from './imgs/suda.png';
import telefono from './imgs/telefono.png';
import tiktok from './imgs/tiktok.png';
import twitter from './imgs/twitter.png';
import youtube from './imgs/youtube.png';
import './Footer.css'

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

  <div>

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
        <div className="footer">
        <img className="pie" src={suda} height="60px" alt='telefono'></img>
        <div className="info">
          <b>

            INFORMACIÓN
          </b>
          <p></p>
          <img className="icon" src={telefono} alt='telefono' height="60px" />(593-7) 283 8323 / 284 3619
          <p></p>
          <img className="icon" src={correo} alt='correo' height="60px" />relpublicaits@sudamericano.edu.ec
          <p></p>
          <img className="icon" src={marcador} alt='marcador' height="60px" />Simón Bolívar y Manuel Vega Esq. Cuenca EC

        </div>
        <div className="comvi">
          <b>

            Comunidad Virtual

          </b>
          <p></p>
          <a href="https://www.facebook.com/institutosudamericano/" ><img className="icon" src={facebook} alt='telefono'></img></a>
          <a href="https://www.youtube.com/channel/UCR_aVMzyNuV9iwY6DcmakDQ" ><img className="icon" src={youtube} alt='telefono'></img></a>
          <a href="https://twitter.com/itsudamericano" ><img className="icon" src={twitter} alt='telefono'></img></a>
          <a href="https://www.tiktok.com/@itsudamericano?lang=es" ><img className="icon" src={tiktok} alt='telefono'></img></a>
          <a href="https://www.instagram.com/itsudamericano/" ><img className="icon" src={instagram} alt='telefono'></img></a>


        </div>



      </div>

  </div>
    

);

}
export default Detalle