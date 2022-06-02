
function CertificadoList(props) {
  return (
    <div>
      <p>Resultado para la Cédula: {props.cedula}</p>
        {props.children}
        </div>
  );
}

export default CertificadoList