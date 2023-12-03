import React from "react";
import FormHome from "../Form/Home"
import './Home.css'
import background from '../../assets/image-1.png';


function Home() {
    return (
        <div className="home" style={{backgroundImage: `url(${background})`}}>
            <div className="div-titulo">
                <h1>Publicações</h1>
            </div>
            <div className="container-form">
                <FormHome />
            </div>
        </div>

    );
}
export default Home;