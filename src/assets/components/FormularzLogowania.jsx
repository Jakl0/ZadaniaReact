import {useState} from 'react';


const FormularzLogowania = () => {

    const[input,setInput] = useState("");
    const[password,setPassword] = useState("");
    const[blad,setBlad] = useState({});
    const [czyPoprawnie,setPoprawnie] = useState(false);

    function handleSubmit(e){
        
        e.preventDefault();
        const nowebledy = {};

        if(input.trim() === ""){
            nowebledy.login = "login nie może być pusty";
        }
        if(password.length < 6 || password.trim() === ""){
            nowebledy.password = "hasło musi mieć conajmniej 6 znaków";
        }
        setBlad(nowebledy);

        if(Object.keys(nowebledy).length === 0){
            setPoprawnie(true);
        }
        else{
            setPoprawnie(false);
        }

    }



    return(
        <>
            <form onSubmit={handleSubmit} >
                <div className='loginInput'>
                    <p>login: </p>
                    <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                    {blad.login && <p>{blad.login}</p>}
                </div>
                <div className='passwordInput'>
                    <p>hasło: </p>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    {blad.password && <p>{blad.password}</p>}
                    
                </div>
                
                <button type="submit">sfsadfasdfsadf</button>
            </form>
            {czyPoprawnie && <h3>Zalogowano pomyślnie</h3>}
            
        </>
    );
}
export default FormularzLogowania;