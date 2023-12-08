import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './Login.css'

function Form() {

  const [userName, setUserName] = useState('');
  const navigate = useNavigate();
  const path = '/home';

  const name = JSON.parse(localStorage.getItem('userName'));
  console.log(name);
  
  const handleSubmit = (e)=>{
    e.preventDefault();
    if(name){
      navigate(path);
    }

    const objPessoa = {
      userName
    }

    const objPessoaJson = JSON.stringify(objPessoa);
    localStorage.setItem('userName', objPessoaJson);
  }
/*
  const v = (e) => {
    e.preventDefault();
    localStorage.setItem('userName', JSON.stringify(userName));
    navigate(path);
  }
  */

  return (
    <div className="form">
      <div className="form-login">
        <h1>LOGIN</h1>
        <label>
          <p>Usuário</p>
          <input
            type="text"
            className="input"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            name="username"
            placeholder="Nome de usuário"
            required
          />
          <p>Senha</p>
          <input type="password" className="input" name="senha" placeholder="Senha" required />
          <button type="submit" className="botao-submit" onClick={handleSubmit} >Entrar</button>
        </label>
        <Link to={'/cadastro'}>
          <h3>Não tenho uma conta</h3>
        </Link>
      </div>
    </div>
  );
}


export default Form;

// 