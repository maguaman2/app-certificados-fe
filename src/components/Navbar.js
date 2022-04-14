import './Navbar.css'
import { NavLink } from "react-router-dom";
export default function Navbar() {

    return (

<nav  class="navbar navbar-expand-lg navbar-light bg-light, li">
  <div class="container-fluid">
  <a class="navbar-brand" href="/certificados">
      <img src="suda.png"  height="60px"></img>
    </a>
   
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon">  </span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/certificados">Certificados</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/subircertificado">Subir Certificados</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="/certificadopageupdate">Editar Certificado</a>
        </li>
       
      </ul>
     
    </div>
  </div>
</nav>




    );

}