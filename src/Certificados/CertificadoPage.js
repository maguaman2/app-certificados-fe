import React, { useState, useEffect } from "react";

import CertificadoList from './CertificadoList';
import Certificado from './Certificado'
import { getListCertificados,searchCertificado } from '../service/CertificadoService'
//import axios from "axios";
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
    <div>

    <div  style={{ marginLeft: "center" }}>
      <h2 className="animista">CERTIFICADOS</h2>
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

export default CertificadoPage;