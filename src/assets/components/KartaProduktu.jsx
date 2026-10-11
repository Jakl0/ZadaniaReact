
import "./KartaProduktu.css"

function KartaProduktu(){

    const czyDostepny=true;
    const cena = 30;
    const nazwa = "Szlifierka kątowa";
    return(
        <>
            
            <div className="karta">
                <h1>{nazwa}</h1>
                <p>{cena*1.27} zł</p>
            </div>

        </>
    );
}
export default KartaProduktu;