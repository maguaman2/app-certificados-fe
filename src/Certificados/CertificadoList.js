
function CertificadoList(props){
return(
    <table>
    <thead >
      <tr>
        <th >Id</th>
        <th>Cedula</th>
        <th>Nombres</th>
        <th>Curso</th>
        <th>Detalle</th>
        

      </tr>
    </thead>
    <tbody>
    
        {props.children}
    
        </tbody>
  </table>
);
}

export default CertificadoList