
import React,{useState} from "react";
import './luas.css';

function App(){

  const[alas, setalas] = useState("") 
  const[tinggi, settinggi] = useState("")
  const[hitung, sethitung] = useState("")

  console.log(`alas : ${alas}`)
  console.log(`tinggi : ${tinggi}`)

  function luas(){
    sethitung(0.5 * alas * tinggi)
  }

  return(
    <div class = "App">
      <h1>
        MENGHITUNG LUAS SEGITIGA
      </h1>
      <p>
        Masukan Nilai Alas
      </p>
      <input type = "text" value = {alas} onChange = {e=> setalas(+e.target.value)}></input>

      <p>
        Masukan Nilai Tinggi
      </p>
      <input type = "text" value = {tinggi} onChange = {e=> settinggi(+e.target.value)}></input>

      <p>
        <button onClick = {luas}>HITUNG</button>
      </p>


      <p>
        {hitung}
      </p>

    </div>
  );
}
export default App;