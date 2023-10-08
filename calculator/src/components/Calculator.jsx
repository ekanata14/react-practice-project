import {React, useState} from 'react';

export default function Calculator(){
  let [first, setFirst] = useState('');
  let [second, setSecond] = useState('');
  let [resultNum, setResult] = useState(0);

  function handleChangeFirst(event){
    setFirst(event.target.value)
  }

  function handleChangeSecond(event){
    setSecond(event.target.value)
  }
  
  function sum(){
    resultNum = setResult(parseInt(first) + parseInt(second));
  }

  function minus(){
    resultNum = setResult(parseInt(first) - parseInt(second));
  }
  
  function times(){
    resultNum = setResult(parseInt(first) * parseInt(second));
  }
  
  function divide(){
    resultNum = setResult(parseInt(first) / parseInt(second));
  }

  function modulus(){
    resultNum = setResult(parseInt(first) % parseInt(second));
  }

  function clear(){
    setFirst('');
    setSecond('');
    setResult(0);
  }
    return ( 
        <>
        <input 
        type='number'
        id="first"
        name="first"
        onChange={handleChangeFirst}
        value={first}
      />
      <input 
        type="number" 
        id="second"
        name="second"
        onChange={handleChangeSecond}
        value={second}
      />
      <br />
      <br />
      <button onClick={sum}>+</button>
      <button onClick={minus}>-</button>
      <button onClick={times}>*</button>
      <button onClick={divide}>/</button>
      <button onClick={modulus}>%</button>
      <button onClick={clear}>AC</button>
      <h2>Result: {resultNum}</h2>
      </>
    )
}