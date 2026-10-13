import {useState} from 'react';


const FormularzLogowania = () => {

    const[input,setInput] = useState("");
    const[password,setPassword] = useState("");
    const[blad,setBlad] = useState(0);

    function handleSubmit(e){

        e.preventDefault();
        setBlad(0);

        if(input.trim() === ""){
            setBlad(blad+1);
        }
        if(password.length < 6 || password.trim() === 0){
            setBlad(blad+2);
        }

    }



    return(
        <>
            <form onSubmit={handleSubmit} >
                <div className='loginInput'>
                    <p>login: </p>
                    <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                    <p>{(blad === 1 || blad === 3)? "login nie może być pusty": ""}</p>
                </div>
                <div className='passwordInput'>
                    <p>hasło: </p>
                    <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <p>{(blad === 2 || blad === 3)? "hasło musi mieć conajmniej 6 znaków": ""}</p>
                </div>
                <button type="submit">sfsadfasdfsadf</button>
            </form>
            
            
        </>
    );
}
export default FormularzLogowania;