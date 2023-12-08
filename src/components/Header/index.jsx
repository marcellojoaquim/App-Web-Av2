import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";



const options = [{
    id: 0,
    text: 'Login'
}, {
    id: 1,
    text: 'Cadastro'
}, {
    id: 2,
    text: 'Home'
}];

function Header() {

    const user = JSON.parse(localStorage.getItem('userName'));


    if (user != null) {
        return (
            <header className="header-home">
                <h1 className="title">SGAMING</h1>
                <h2 className="title">Bem Vindo, {user.userName}</h2>
                <ul>
                    {options.map((texto) => (
                        <Link to={`/${texto.text.toLowerCase()}`}>
                            <li>
                                <p>{texto.text}</p>
                            </li>
                        </Link>
                    ))}
                </ul>
            </header>
        );
    }
    return (
        <header className="header-home">
            <h1 className="title">SGAMING</h1>
            <h2 className="title">Bem Vindo</h2>
            <ul>
                {options.map((texto) => (
                    <Link to={`/${texto.text.toLowerCase()}`}>
                        <li>
                            <p>{texto.text}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </header>
    );
}
export default Header;