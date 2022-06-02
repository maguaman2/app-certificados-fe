function CertificadoListUpdate(props){
return(
  <div>

    <table>
    <thead >
      <tr>
        <th >Id</th>
        <th>Cédula</th>
        <th>Nombres</th>
        <th>Curso</th>
        <th>Editar</th>
      
        

      </tr>
    </thead>
    <tbody>
    
        {props.children}
    
        </tbody>
  </table>
  
  </div>
);
}

export default CertificadoListUpdate