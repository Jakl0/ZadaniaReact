import { useState } from "react";
import './WyborKoloru.css'

const WyborKoloru = () => {

    const [aktualnyKolor,setKolor] = useState("biały");
    const [pokazac,setPokazac] = useState(true);

    return(
        <div className="main">
            
            <div className={aktualnyKolor}/>

            <p>{pokazac? aktualnyKolor : ''}</p>

            <button onClick={() => setKolor("czerwony")}>Czerwony</button>
            <button onClick={() => setKolor("zielony")}>Zielony</button>
            <button onClick={() => setKolor("niebieski")}>Niebieski</button>
            
            <button onClick={()=>setPokazac(!pokazac)} >Pokaż / Ukryj</button>
        </div>
    );
}
export default WyborKoloru;