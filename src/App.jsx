import React, { useState } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState(8);
  const [upper, setUpper] = useState(true);
  const [lower, setLower] = useState(true);
  const [number, setNumber] = useState(true);
  const [symbol, setSymbol] = useState(true);
  const[pass,setpass]=useState('')
  const gentrate=()=>{
    let chatset="";
    if (upper) chatset+="ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    if (lower) chatset+="abcdefghijklmnopqrstuvwxyz"
    if (number) chatset+="1234567890";
    if (symbol) chatset+="!@#$%^&*()_+";
    let generateor=" "
    for (let i=0;i<length;i++){
      const random=Math.floor(Math.random()* chatset.length)
      generateor+=chatset[random]
    }
    setpass(generateor)
  }
  const copy=()=>{
    navigator.clipboard.writeText(pass)
    alert("password is copied")
  }

  return (
    <div className="container">
      <div className="pass">
        <div className="h">
          <h3>strong password generator</h3>
        </div>
        <div className="length">
          <label htmlFor="input">password length:</label>
          <input type="number" id="input" value={length} onChange={(e) => setLength(parseInt(e.target.value))} />
        </div>
        <div className="input">
          <input type="checkbox" id="upper" checked={upper} onChange={(e) => setUpper(e.target.checked)} />
          <label htmlFor="upper">include uppercase</label>
        </div>
        <div className="input">
          <input type="checkbox" id="lower" checked={lower} onChange={(e) => setLower(e.target.checked)} />
          <label htmlFor="lower">include lowercase</label>
        </div>
        <div className="input">
          <input type="checkbox" id="numbers" checked={number} onChange={(e) => setNumber(e.target.checked)} />
          <label htmlFor="numbers">include numbers</label>
        </div>
        <div className="input">
          <input type="checkbox" id="symbol" checked={symbol} onChange={(e) => setSymbol(e.target.checked)} />
          <label htmlFor="symbol">include symbol</label>
        </div>
        <div className='button'>
          <button onClick={gentrate}>generate password</button>
        </div>
        <div className="generate-password">
          <input type="text" value={pass} readOnly />
          <button className='copy&btn'onClick={copy} >copy</button>
        </div>
      </div>
    </div>
  );
}

export default App;
