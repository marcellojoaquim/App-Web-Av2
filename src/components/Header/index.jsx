import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const options = ['Login', 'Cadastro', 'Home'];

function Header() {
    return (
        <header className="header-home">
            <h1 className="title">SGAMING</h1>
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