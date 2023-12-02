import React, { useState } from "react";
import {useNavigate} from "react-router-dom";

function Form() {

  const [userName, setUserName] = useState('');
  const history = useNavigate();
  const path = '/home';

  const v = (e) => {
    e.preventDefault();
    localStorage.setItem('userName', JSON.stringify(userName));
    history(path);
  }
  
    return (
      <div className="form-login">
        <label>
          <input
            type="text"
            className="input"
            onChange={(e) => setUserName(e.target.value)}
            value={userName}
            name="username"
            placeholder="Nome de usuário"
            required
          />
          <input type="password" name="senha" placeholder="Senha" required />
            <button type="submit" className="botao-submit" onClick={v} >Entrar</button>
        </label>
      </div>
    );
  }


export default Form;

// 