import React from "react";

function Form() {

    function handleSubmit(e) {

        e.preventDefault();
    
        const form = e.target;
        const formData = new FormData(form);

        fetch('/some-api', { method: form.method, body: formData });
    
        const formJson = Object.fromEntries(formData.entries());
        console.log(formJson);
      }

    return(
        <form method="Post" onSubmit={handleSubmit}>
            <label> 
                Mensagem <input className="input" placeholder="Digite aqui sua mensagem"/> 
            </label>
        </form>
    );
}
export default Form;

/*
<form action="login.html" class="form-home">
                <textarea class="textarea" placeholder="No que você está pensando?" ></textarea>
                <div class="icons-home">
                    <div class="icon"><img src="img/icon3.svg" width="20px" height="20px"></div>
                    <div class="icon"><img src="img/icon4.svg" width="20px" height="20px"></div>
                    <div class="icon"><img src="img/icon5.svg" width="20px" height="20px"></div>
                    <div class="icon"><img src="img/icon6.svg" width="20px" height="20px"></div>
                    <button type="submit" class="botao-post">Postar</button>          
                </div>
            </form>
*/