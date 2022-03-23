
function CertificadoList(props){
return(
    <table>
    <thead >
      <tr>
        <th >Id</th>
        <th>Cedula</th>
        <th>Nombres</th>
        <th>Email</th>
        <th>Fechas</th>
        <th>Rol</th>
        <th>Capacitador</th>
        <th>Codigo</th>
        <th>Area</th>
        <th>Curso</th>
        <th>Objetivo</th>
        <th>Contenidos</th>

      </tr>
    </thead>
    <tbody>
    
        {props.children}
    
        </tbody>
  </table>
);
}

export default CertificadoList