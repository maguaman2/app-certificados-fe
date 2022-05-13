import './Navbar.css'
export default function Navbar() {

  return (

    <div>

      <nav className="navbar navbar-expand-lg navbar-light bg-light, li">
        <div className="container-fluid">
          <a className="navbar-brand" href="/certificados">
            <img src="suda.png" height="60px"></img>

          </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon">  </span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/certificados">Certificados</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Administrador
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <li><a className="dropdown-item" href="/subircertificado">Subir Certificado</a></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><a className="dropdown-item" href="/certificadopageupdate">Editar Certificado</a></li>
                  <li><hr className="dropdown-divider"></hr></li>
                  <li><a className="dropdown-item" href="/login">Login</a></li>
                  <li><hr className="dropdown-divider"></hr></li>

                </ul>
              </li>

            </ul>


          </div>
        </div>


      </nav>

      <div>
        <div>
          <img className='img2' src="certificacion.png" height="710x" ></img>

        </div>

      </div>
    </div>










  );

}