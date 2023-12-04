import React from "react";
import CadastroForm from "../Form/Cadastro";
import Info from '../Form/Login/Info'
import background from '../../assets/image-1.png'

function Login() {
    return(
        <div className="main" style={{backgroundImage: `url(${background})`}}>
            <div className="info">
                <Info/>
            </div>
            <div className="form">
                <CadastroForm />
            </div>
        </div>
    );
}
export default Login;