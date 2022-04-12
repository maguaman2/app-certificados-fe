import './Navbar.css'
import { NavLink } from "react-router-dom";
export default function Navbar() {

    return (
      

<ul className="nav nav-tabs">
<li className="nav-item">
<a className="navbar-brand" >
      <img src="suda.png" alt="" />
    </a>
<NavLink to={"/certificados"} className="navlink">
                 
                 Certificados
                   
                     
                </NavLink>
                <br></br>
                <NavLink to={"/subircertificado"} className="navlink">
                 
                 subirCertificado
                   
                     
                </NavLink>
                <NavLink to={"/certificadopageupdate"} className="navlink">
                 
                 Actulizar 
                   
                     
                </NavLink>


</li>
</ul>
    );

}