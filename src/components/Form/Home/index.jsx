import React, { useState, useEffect } from "react";

function Form() {

    const [msg, setMsg] = useState(()=>{
        const s = localStorage.getItem('msg');
        const initValue = JSON.parse(s);
        return initValue || "";
    });

    useEffect(()=>{
        localStorage.setItem('msg', JSON.stringify(msg));
    }, [msg]);

    return (
        <div>
            <form>
                <label>
                    Mensagem <input
                        type="text"
                        className="input"
                        onChange={(e) => setMsg(e.target.value) }
                        value={msg}
                        name="teste"
                        placeholder="Digite aqui sua mensagem"
                        />
                </label>
                <label>
                    <input type="submit" value="Postar" />
                </label>
            </form>
            <div>
                <p>
                    Teste
                </p>
            </div>
        </div>
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