
import './Login.css'
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginAdmin } from '../service/LoginService'

function Login(props) {

    const navigate = useNavigate();
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(false);


    const onSubmit = (event) => {
        event.preventDefault();
        loginAdmin({ username, password }).then(data => {
            if (data.status === 200) {
                console.log(data.body.jwt);
                document.cookie = `token=${data.body.jwt};max-age=${60 * 60 * 3}; path=/; samesite=strict`
                navigate("/certificadopageupdate")
            } else {
                
                setError(true);
            }
        }
        )

    }

    const onChange = (event) => {
        if (event.target.name === 'username')
            setUsername(event.target.value)

        if (event.target.name === 'password')
            setPassword(event.target.value)

    }
    return (

        <div className="container">

            <div className="row">
                <div class="col-lg-3 col-md-2"></div>
                <div class="col-lg-6 col-md-8 login-box">
                    <div classname="col-lg-12 login-key">
                        <i classname="fa fa-key" aria-hidden="true"></i>
                    </div>
                    <div class="col-lg-12 login-title">
                        ADMINISTRADOR
                    </div>

                    <div classname="col-lg-12 login-form">
                        <div classname="col-lg-12 login-form">
                            <form onSubmit={onSubmit}>
                                <div classname="form-group">
                                    <label class="form-control-label">Usuario</label>
                                    <input type="text" class="form-control"
                                        name="username"
                                        value={username}
                                        onChange={onChange}></input>
                                </div>
                                <div classname="form-group">
                                    <label class="form-control-label">Contraseña</label>
                                    <input type="password" class="form-control"

                                        name="password"
                                        value={password}
                                        onChange={onChange}
                                    ></input>
                                </div>

                                <div classname="col-lg-12 loginbttm">
                                    <div class="col-lg-6 login-btm login-text">
                                        Bienvenido
                                    </div>
                                    <div classname="col-lg-6 login-btm login-button">
                                        <button type="submit" class="btn btn-outline-primary">INICIAR</button>
                                    </div>
                                </div>
                                {error && (
						<p>
							Error de usuario/contrasena
						</p>
					)}
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