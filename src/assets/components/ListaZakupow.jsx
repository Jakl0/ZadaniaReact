import {useState} from "react";

const ListaZakupow = () => {
    const [zakupy,setZakupy] = useState([]);
    const [nowaNazwa , setNazwa] = useState("");
    const [noweId,setId] = useState(1);
    const [blad,setBlad] = useState({});

    function dodajZakup(e){
        e.preventDefault();
        const nowyblad = {}
        if(nowaNazwa.trim() === ""){
                nowyblad.nazwa = "nazwa nie może być pusta";
        }
        
        else{
            setZakupy(prev => [...prev ,{id:noweId , nazwa:nowaNazwa}]);
            setId(noweId+1);
            setNazwa("");
        }
        setBlad(nowyblad);
        
    }
    
    function usunZakup(targetId){
        setZakupy(zakupy.filter((zakup) => zakup.id !== targetId));
    }

    return(
        <>

            <form onSubmit={dodajZakup}>
                <input type="text" value={nowaNazwa} onChange={()=> setNazwa(event.target.value)} name="nazwa"/> 
                <button type="submit">dssd</button>
                {blad.nazwa && "nazwa nie może być pusta"}
            </form>
            <ul>
            {
                (zakupy.length > 0?
                zakupy.map((zakup) =>
                    <div className="zakup"> 
                        <li key={zakup.id}>{zakup.nazwa}</li>  
                        <button onClick={ () =>usunZakup(zakup.id)}>usun</button>
                    </div>  
                )
            : "Lista jest Pusta" 
            )
            }
            <p>{zakupy.length}</p>
            </ul>
        </>
    );
}
export default ListaZakupow;