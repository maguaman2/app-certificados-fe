import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

function CertificadoList(props){
return(
  <div className="table table-bordered">
  
  
    <div className="centrar">


    <table  >
    <thead >
      <tr >
        <th className="th" >Id</th>
        <th className="th">Cédula</th>
        <th className="th">Nombres</th>
        <th className="th">Curso</th>
        <th className="th">Detalle</th>
      </tr>
    </thead>
    <tbody>
    
        {props.children}
    
        </tbody>
  </table>
    </div>
  </div>
);
}

export default CertificadoList