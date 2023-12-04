import React, { useState } from "react";
import './Home.css'


function Form() {

    const [msg, setMsg] = useState('');
    const v = (e) => {
        e.preventDefault();
        localStorage.setItem('msg', JSON.stringify(msg));
        /*
        const text = ''
        text = localStorage.getItem('msg');
*/
        console.log(msg);

    }

    return (
        <div className="home-input">
            <form className="form-home">
                <label>
                    <input
                        type="text"
                        className="input"
                        onChange={(e) => setMsg(e.target.value)}
                        value={msg}
                        name="teste"
                        placeholder="No que está pensando?"
                    />
                </label>
                <label>
                    <button className="botao-post" type="submit" value="Postar" onClick={v}>Postar</button>
                </label>
            </form>
            <div className="titulo-feed">
                <h2>FEED</h2>
            </div>
            <div className="feed">
                <ul>
                    <p>
                        {msg}
                    </p>
                </ul>
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