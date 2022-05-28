
function CertificadoList(props) {
  return (
    <div>
      <p>Resultado para la cedula: {props.cedula}</p>
        {props.children}
        </div>
  );
}

export default CertificadoList