import {useState} from 'react';


const FormularzLogowania = () => {

    const[input,setInput] = useState("");
    const[password,setPassword] = useState("");





    return(
        <>
            <form >
                <input type="text" value={input} onChange={e => setInput(e.target.value)} />
                <input type="password" value={password} onChange={e => setPassword(e.target.value)} />
            </form>
            <p>{input}</p>
            <p>{password}</p>
        </>
    );
}
export default FormularzLogowania;