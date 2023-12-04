import React, { useState } from "react";
import './Cadastro.css'
import { Link } from "react-router-dom";


function FormCadastro() {


    return (
        
        <div>
            <div className="form-signup">
                <h1>Nova Conta</h1>
                <form action="login.html" className="form-container">
                    <div className="campos-simples">
                        <p>Nome:</p>
                        <input type="text" name="name" />
                        <p>Email:</p>
                        <input type="email" name="email" />
                    </div>
                    <div className="campos-estilizados">
                        <div className="div1">
                            <p>Senha:</p>
                            <input type="password" name="password" />
                        </div>
                        <div className="div2">
                            <p>Confirme sua senha:</p>
                            <input type="password" name="confirm-password" />
                        </div>
                        <div className="div3">
                            <p>CPF:</p>
                            <input type="number" name="cpf" />
                        </div>
                        <div className="div4">
                            <p>Telefone:</p>
                            <input type="number" name="telefone" />
                        </div>
                    </div>
                    <div className="button-signup">
                        <Link to={'/login'}>
                            <button type="submit" class="botao-signup">Cadastrar</button>
                        </Link>
                    </div>
                </form>
            </div>
        </div>
    );
}
export default FormCadastro;