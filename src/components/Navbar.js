import './Navbar.css'
import { NavLink } from "react-router-dom";
export default function Navbar() {

    return (
      

<ul class="nav nav-tabs">
<li class="nav-item">
<a class="navbar-brand" >
      <img src="suda.png" alt="" />
    </a>
<NavLink to={"/certificados"} className="navlink">
                 
                 Certificados
                   
                     
                </NavLink>
                <br></br>
                <NavLink to={"/subircertificado"} className="navlink">
                 
                 subirCertificado
                   
                     
                </NavLink>

</li>
</ul>
    );

}