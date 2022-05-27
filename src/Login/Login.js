
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

  
            <div className="login">
                <div className="login-container">
                    <h2 className="tittle">Inicio de sesion administrador</h2>
                    <p className="subtittle">Ingrese usuario y contrasena</p>
                    <form onSubmit={onSubmit} className="login-form">

                        <input
                            id="input-login"
                            placeholder="Usuario"
                            type="text"
                            name="username"
                            value={username}
                            onChange={onChange}
                            className="login-input"
                        />

                        <input
                            id="input-password"
                            placeholder="password"
                            type="password"
                            name="password"
                            value={password}
                            onChange={onChange}
                            className="login-input"
                        />
                        <input type="submit" value="Entrar" className="primary-button login-button" />
                        {error && (
                            <p>
                                Error de usuario/contrasena
                            </p>
                        )}
                    </form>


                </div>
            </div>
   







    );
}
export default Login