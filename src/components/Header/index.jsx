import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const options = ['Login', 'Cadastro', 'Home'];


function Header() {

    const username = localStorage.getItem('@project/username');

    if(username != null){
        return (
            <header className="header-home">
                <h1 className="title">SGAMING</h1>
                <h2 className="title">Bem VINDO, {username}</h2>
                <ul>
                    {options.map((texto) => (
                        <Link to={`/${texto.toLowerCase()}`}>
                            <li>
                                <p>{texto}</p>
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
                    <Link to={`/${texto.toLowerCase()}`}>
                        <li>
                            <p>{texto}</p>
                        </li>
                    </Link>
                ))}
            </ul>
        </header>
    );
}
export default Header;