
import './Certificado.css'
import { getCertificadoById } from '../service/CertificadoService'
import Footer from '../components/Footer'
import React, { useState, useEffect, Fragment } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CertificadoDetalle(props) {

  const [certificado, setCertificado] = useState({});
  const { certificadoId } = useParams();
  useEffect(() => {
    getCertificadoById(certificadoId).then(data => {
      setCertificado(data);
    }
    );
  }, [certificadoId]);

  return (

    <Fragment>
      <div className="list-group">
        <a style={{ backgroundColor: '#676766' }} className="list-group-item list-group-item-action active" aria-current="true">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Certificado de {certificado.curso}  </h5>
          </div>
        </a>
        <a className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Cédula </h5>
          </div>
          <p> {certificado.cedula} </p>
        </a>
        <a className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Nombres</h5>
          </div>
          <p> {certificado.nombres} </p>
        </a>
        <a className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Email</h5>
          </div>
          <p> {certificado.email} </p>
        </a>
        <a className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Fechas</h5>
          </div>
          <p> {certificado.fechas} </p>
        </a>
        <a className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Rol</h5>
          </div>
          <p> {certificado.rol} </p>
        </a>
        <a className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Capacitador</h5>
          </div>
          <p> {certificado.capacitador} </p>
        </a>
        <a className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Código </h5>
          </div>
          <p> {certificado.codigo} </p>

        </a>
        <a className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Área </h5>
          </div>
          <p> {certificado.area} </p>
        </a>
        <a className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Curso</h5>
          </div>
          <p> {certificado.curso} </p>
        </a>
        <a className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">objetivo</h5>
          </div>
          <p> {certificado.objetivo} </p>
        </a>
        <a className="list-group-item list-group-item-action">
          <div className="d-flex w-100 justify-content-between">
            <h5 className="mb-1">Contenidos</h5>
          </div>
          <p> {certificado.contenidos} </p>
        </a>
        <Link to={`/certificados/`}>
          <button style={{ backgroundColor: '#6c757d' }} type="button" className="btn btn-primary">Regresar</button>

        </Link>
      </div>
      <Footer />

    </Fragment>


  );

}
export default CertificadoDetalle