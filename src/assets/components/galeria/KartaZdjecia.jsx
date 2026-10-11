import React from "react";
import './Galeria.css'

const KartaZdjecia = ({tytul="brak tytułu",url,liczbapolubien}) =>{
    return(
        <div className="imageCard">
            <h2>{tytul}</h2>
            <img src={url} height={100}/>
            {liczbapolubien> 100?<i><b>Popularne</b></i> : ""}
        </div>
    );
}
export default KartaZdjecia;