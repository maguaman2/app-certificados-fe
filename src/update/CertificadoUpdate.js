import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { updateCertificado, getCertificadoById } from '../service/CertificadoService'
import './CertificadoUpdate.css'

function CertificadoUpdate() {

  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const { certificadoId } = useParams();
  const [certificado, setCertificado] = useState({
    cedula: '',
    nombres: '',
    email: '',
    fechas: '',
    rol: '',
    capacitador: '',
    codigo: '',
    area: '',
    curso: '',
    objetivo: '',
    contenidos: '',

  });

  const onSubmit = (event) => {
    event.preventDefault();
    setLoading(true);
    const cokieActual = document.cookie;
    console.log(cokieActual);
    updateCertificado(certificado, cokieActual)
      .then(data => {
        setLoading(false)
        navigate(`/certificadoupdate/${certificadoId}`)
      });

  }
  const onChange = (event) => {
    if (event.target.name === 'cedula')
      setCertificado({ ...certificado, cedula: event.target.value })
    if (event.target.name === 'nombres')
      setCertificado({ ...certificado, nombres: event.target.value })
    if (event.target.name === 'email')
      setCertificado({ ...certificado, email: event.target.value })
    if (event.target.name === 'fechas')
      setCertificado({ ...certificado, fechas: event.target.value })
    if (event.target.name === 'rol')
      setCertificado({ ...certificado, rol: event.target.value })
    if (event.target.name === 'capacitador')
      setCertificado({ ...certificado, capacitador: event.target.value })
    if (event.target.name === 'codigo')
      setCertificado({ ...certificado, codigo: event.target.value })
    if (event.target.name === 'area')
      setCertificado({ ...certificado, area: event.target.value })
    if (event.target.name === 'curso')
      setCertificado({ ...certificado, curso: event.target.value })
    if (event.target.name === 'objetivo')
      setCertificado({ ...certificado, objetivo: event.target.value })
    if (event.target.name === 'contenidos')
      setCertificado({ ...certificado, contenidos: event.target.value })
  }

  useEffect(() => {
    getCertificadoById(certificadoId).then(data => {
      setCertificado(data);
    }
    );
  }, [certificadoId]);

  return (
    <div className="boxUpdate" >
      <form onSubmit={onSubmit} className="boxFormUpdate">
        <h2>Actualizar Certificado</h2>
        <div className="datos-personales">
          <label>Cédula</label>
          <input
            className="formUpdateInput"
            name="cedula"
            placeholder="cedula"
            value={certificado.cedula}
            onChange={onChange}

          />
          <label>Nombres</label>
          <input
            className="formUpdateInput"
            placeholder="Nombres"
            name="nombres"
            value={certificado.nombres}
            onChange={onChange}
          />
          <label>Email</label>
          <input
            className="formUpdateInput"
            placeholder="Email"
            name="email"
            value={certificado.email}
            onChange={onChange}
          />
          <label>Rol</label>
          <input
            className="formUpdateInput"
            placeholder="Rol"
            name="rol"
            value={certificado.rol}
            onChange={onChange}
          />
        </div>

        <div className="datos-curso">
          <label>Curso</label>
          <input
            className="formUpdateInput"
            placeholder="Curso"
            name="curso"
            value={certificado.curso}
            onChange={onChange}
          />
          <label>Fechas</label>
          <input
            className="formUpdateInput"
            placeholder="Fechas"
            name="fechas"
            value={certificado.fechas}
            onChange={onChange}
          />

          <label>Capacitador</label>

          <input
            className="formUpdateInput"
            placeholder="Capacitador"
            name="capacitador"
            value={certificado.capacitador}
            onChange={onChange}
          />
          <label>Código</label>
          <input
            className="formUpdateInput"
            placeholder="Codigo"
            name="codigo"
            value={certificado.codigo}
            onChange={onChange}
          />
          <label>Área</label>
          <input
            className="formUpdateInput"
            placeholder="Area"
            name="area"
            value={certificado.area}
            onChange={onChange}
          />


          <label>Objetivo</label>
          <input
            className="formUpdateInput"
            placeholder="Objetivo"
            name="objetivo"
            value={certificado.objetivo}
            onChange={onChange}
          />
          <label>Contenido</label>
          <input
            className="formUpdateInput"
            placeholder="Contenidos"
            name="contenidos"
            value={certificado.contenidos}
            onChange={onChange}
          />
        </div>
        {loading && (
          <p>
            Guardando
          </p>
        )}


        <button type="submit" className="primary-button">Guardar</button>

      </form>

    </div>
  );
}

export default CertificadoUpdate;