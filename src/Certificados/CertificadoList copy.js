import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

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
        <td><Link to={`/certificadoupdate/${props.itemTeacher.id}`}>Editar</Link></td>
        

      </tr>
    </thead>
    <tbody>
    
        {props.children}
    
        </tbody>
  </table>
);
}

export default CertificadoList