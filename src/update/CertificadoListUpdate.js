import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CertificadoListUpdate(props){
return(
    <table>
    <thead >
      <tr>
        <th >Id</th>
        <th>Cedula</th>
        <th>Nombres</th>
        <th>Curso</th>
        <th>Editar</th>
      
        

      </tr>
    </thead>
    <tbody>
    
        {props.children}
    
        </tbody>
  </table>
);
}

export default CertificadoListUpdate