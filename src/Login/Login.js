
import './Login.css'

function Login(props){
  return(

  <div class="container">

  <div class="row">
      <div class="col-lg-3 col-md-2"></div>
      <div class="col-lg-6 col-md-8 login-box">
          <div class="col-lg-12 login-key">
              <i class="fa fa-key" aria-hidden="true"></i>
          </div>
          <div class="col-lg-12 login-title">
              ADMINISTRADOR
          </div>

          <div class="col-lg-12 login-form">
              <div class="col-lg-12 login-form">
                  <form>
                      <div class="form-group">
                          <label class="form-control-label">Usuario</label>
                          <input type="text" class="form-control"></input>
                      </div>
                      <div class="form-group">
                          <label class="form-control-label">Contraseña</label>
                          <input type="password" class="form-control" i></input>
                      </div>

                      <div class="col-lg-12 loginbttm">
                          <div class="col-lg-6 login-btm login-text">
                             Bienvenido 
                          </div>
                          <div class="col-lg-6 login-btm login-button">
                              <button type="submit" class="btn btn-outline-primary">INICIAR</button>
                          </div>
                      </div>
                  </form>
              </div>
          </div>
          <div class="col-lg-3 col-md-2"></div>
      </div>
  </div>
  </div>




  );
}
export default Login