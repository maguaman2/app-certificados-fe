
import './Certificado.css'
import { Link } from "react-router-dom";
import axios from 'axios';

function CertificadoView(props){
   
return(
    <tr > 
        <td>{props.itemTeacher.id}</td>   
        <td> {props.itemTeacher.cedula} </td>     
        <td> {props.itemTeacher.nombres} </td>
        <td> {props.itemTeacher.curso} </td>
        <td><Link to={`/certificadoupdate/${props.itemTeacher.id}`}>Editar</Link> </td>
        
    </tr>
    
      
);

}
export default CertificadoView
