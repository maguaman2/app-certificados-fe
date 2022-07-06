import './Certificado.css'
import { getCertificadoById } from '../service/CertificadoService'

import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { MainContext } from "../context/MainContext";


function CertificadoDetalle(props) {

  const [certificado, setCertificado] = useState({});
  const { certificadoId} = React.useContext(MainContext);

  useEffect(() => {
    getCertificadoById(certificadoId).then(data => {
      setCertificado(data);
    }
    );
  }, [certificadoId]);

  return (

    <div className="detalle">
      <div className="card">
        <div className="titulo">
          <p >Certificado</p>
        </div>
        <div className="curso">
          <p className="nombre-curso">{certificado.curso}  </p>
        </div>
        <div className="datos-personales">
          <p className="row-dato"> <span>Cédula: </span> <span>{certificado.cedula}</span> </p>
          <p className="row-dato"> <span>Nombre: </span> <span>{certificado.nombres}</span> </p>
         {certificado.link && 
          <p className="row-dato"> <span>Link: </span><span>{certificado.link} </span></p>
         }
          <p className="row-dato"> <span>Participación como: </span><span>{certificado.rol} </span></p>
        </div>
        <div className="datos-curso">
        <p className="row-dato"> <span>Curso del área de: </span><span>{certificado.area} </span></p>
          <p className="row-dato"><span>Realizado del: </span> <span>{certificado.fechas}</span> </p>          
          <p className="row-dato"> <span>Capacitador: </span><span>{certificado.capacitador} </span></p>
          <p className="row-dato"> <span>Código: </span> <span>{certificado.codigo} </span></p>          
        </div>
        <div className="contenido-curso">
          <p className="row-dato"> <span>Objetivo:</span><span>{certificado.objetivo}</span></p>
          <p className="row-dato"> <span>Contenido:</span><span>{certificado.contenidos} </span></p>
          <p className="row-dato"> <span>Horas:</span><span>{certificado.horas} </span></p>
        </div>
        <Link to={`/certificados`} className="link">
                   
                        <button className="primary-button detalle-button">Regresar </button>
            
                    </Link>

                    
      </div>
    </div>
  );

}
export default CertificadoDetalle