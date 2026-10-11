import React from "react";
import KartaZdjecia from "./KartaZdjecia";
import './Galeria.css';
import logo from './Apple_logo_black.svg'

const Galeria = () =>{

    return(
        <div className="galeriacontainer">
            <KartaZdjecia liczbapolubien={203} tytul="zdjecie1" url={logo} />
            <KartaZdjecia liczbapolubien={23} tytul="zdjecie2" url={logo}/>
            <KartaZdjecia liczbapolubien={403} tytul="zdjecie3" url={logo}/>
            <KartaZdjecia liczbapolubien={100} tytul="zdjecie4" url={logo}/>
            <KartaZdjecia liczbapolubien={4394309}  url={logo}/>
        </div>
    );

}
export default Galeria;