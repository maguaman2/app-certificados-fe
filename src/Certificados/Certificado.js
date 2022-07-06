
import './Certificado.css'
import { Link } from "react-router-dom";
//import 'bootstrap/dist/css/bootstrap.min.css';
import Loading from '../components/Loading';
import { useState } from 'react/cjs/react.production.min';
import {MainContext} from "../context/MainContext";
import React from "react";
import { Modal } from "../components/Modal";
import CertificadoDetalle from './CertificadoDetalle';


function Certificado({ itemCertificado }) {

    const { openModal, setOpenModal,setCertificadoId } = React.useContext(MainContext);

    const onClick = () => {
      setOpenModal(true);
      setCertificadoId(itemCertificado.certificadoId)
    }



    return (
        <div className="certificado">
            <div className="certificado-container">
                <div className="certificado-item">
<button onClick={onClick}>
                    <p>
                        <span>{itemCertificado.curso} </span>
                        <span>{itemCertificado.nombres} </span>
                    </p>
                    </button>
                </div>
            </div>
            {!!openModal &&
        (
          <Modal>
             <CertificadoDetalle />
          </Modal>
        )
      }
        </div>












    );
    }


export default Certificado
