import React from "react";
import LoginForm from "../Form/Login";
import Info from "../Form/Login/Info.jsx"
import background from "../../assets/image-1.png"
import './Login.css'

function Login() {
    return (
        
        <div className="main" style={{backgroundImage: `url(${background})`}}>
            <div className="info">
                <Info/>
            </div>
            <div className="form">
                <LoginForm />
            </div>
        </div>
    );
}
export default Login;