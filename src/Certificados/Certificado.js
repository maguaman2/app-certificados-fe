
import './Certificado.css'
import { Link } from "react-router-dom";
import axios from 'axios';

function Certificado(props){
   
return(
    <tr > 
        <td>{props.itemTeacher.id}</td>   
        <td> {props.itemTeacher.cedula} </td>     
        <td> {props.itemTeacher.nombres} </td>
        <td> {props.itemTeacher.curso} </td>
        <td><Link to={`/detalle/${props.itemTeacher.id}`}>Detalle</Link> </td>
    </tr>
    
      
);

}
export default Certificado
  //  <div>
  // <input type="file" name='files' multiple onChange={()=>subirArchivos(e.target.files)}/>
     //   <button>
     //       insertar archivos
     //   </button>
      //      </div>