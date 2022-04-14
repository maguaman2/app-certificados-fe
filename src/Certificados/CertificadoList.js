import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CertificadoList(props){
return(
    <div className="centrar">


    <table  >
    <thead >
      <tr >
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
    </div>
);
}

export default CertificadoList