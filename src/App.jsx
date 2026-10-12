import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'
import KartaProduktu from './assets/components/KartaProduktu.jsx'
import Galeria from './assets/components/galeria/Galeria.jsx'
import WyborKoloru from './assets/components/kolor/WyborKoloru.jsx'
import FormularzLogowania from './assets/components/FormularzLogowania.jsx'
function App() {
  

   const [dane, setDane] = useState({ 

 login: "", 

 email: "", 

 haslo: "", 

 miasto: "Warszawa", 

 regulamin: false, 

 }); 

 

 // Stan na komunikaty o błędach 

 const [bledy, setBledy] = useState({}); 

 // Stan informujący o udanej rejestracji 

 const [wyslano, setWyslano] = useState(false); 

 

 // Wspólna funkcja aktualizująca dowolne pole tekstowe lub listę 

 function zmienPole(e) { 

 const { name, value } = e.target; 

 // Kopiujemy obiekt i nadpisujemy jedno pole (niemutowanie stanu) 

 setDane(prev =>({ ...prev, [name]: value })); 

 } 

 

 // Osobna obsługa pola wyboru, bo używa właściwości checked 

 function zmienRegulamin(e) { 

 setDane(prev =>({...prev , regulamin: e.target.checked })); 

 } 

 

 function obsluzWyslanie(e) { 

 e.preventDefault(); 

 const noweBledy = {}; 

 

 // Walidacja loginu 

 if (dane.login.trim() === "") { 

  noweBledy.login = "Login jest wymagany"; 

 } else if (dane.login.length < 3) { 

  noweBledy.login = "Login musi mieć co najmniej 3 znaki"; 

 } 

 

 // Walidacja adresu e–mail 

 if (!dane.email.includes("@")) { 

  noweBledy.email = "Podaj poprawny adres e–mail"; 

 } 

 

 // Walidacja hasła 

 if (dane.haslo.length < 6) { 

  noweBledy.haslo = "Hasło musi mieć co najmniej 6 znaków"; 

 } 

 

 // Walidacja akceptacji regulaminu 

 if (!dane.regulamin) { 

  noweBledy.regulamin = "Akceptacja regulaminu jest wymagana"; 

 } 

 

 setBledy(noweBledy); 

 

 // Jeśli brak błędów, uznajemy rejestrację za udaną 

 if (Object.keys(noweBledy).length === 0) { 

  setWyslano(true); 

  console.log("Zarejestrowano:", dane); 

 } 

 } 

 

 return ( 

 <form className="rejestracja" onSubmit={obsluzWyslanie}> 

  <h2>Rejestracja</h2> 

 

  <label>Login</label> 

  <input name="login" value={dane.login} onChange={zmienPole} /> 

  {bledy.login && <p className="blad">{bledy.login}</p>} 

 

  <label>Adres e–mail</label> 

  <input name="email" value={dane.email} onChange={zmienPole} /> 

  {bledy.email && <p className="blad">{bledy.email}</p>} 

 

  <label>Hasło</label> 

  <input 

  name="haslo" 

  type="password" 

  value={dane.haslo} 

  onChange={zmienPole} 

  /> 

  {bledy.haslo && <p className="blad">{bledy.haslo}</p>} 

 

  <label>Miasto</label> 

  <select name="miasto" value={dane.miasto} onChange={zmienPole}> 

  <option value="Warszawa">Warszawa</option> 

  <option value="Kraków">Kraków</option> 

  <option value="Gdańsk">Gdańsk</option> 

  </select> 

 

  <label> 

  <input 

   type="checkbox" 

   checked={dane.regulamin} 

   onChange={zmienRegulamin} 

  /> 

  Akceptuję regulamin 

  </label> 

  {bledy.regulamin && <p className="blad">{bledy.regulamin}</p>} 

 

  <button type="submit">Zarejestruj</button> 

 

  {/* Komunikat o sukcesie po poprawnej rejestracji */} 

  {wyslano && <p className="sukces">Rejestracja zakończona pomyślnie</p>} 

  <FormularzLogowania/>
 </form> 

 ); 
}

export default App
