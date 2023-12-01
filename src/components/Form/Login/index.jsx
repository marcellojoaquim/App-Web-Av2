import React from "react";

function Form() {

    return(
        <div className="form-login" onSubmit={this.handleSubmit}>
        <label>
        <input type="text" name="username" placeholder="Nome de usuário" required />
        <input type="text" name="username" placeholder="Senha" required />
        <button type="submit" className="botao-submit">Entrar</button>
        </label>
      </div>
    );
}
export default Form;