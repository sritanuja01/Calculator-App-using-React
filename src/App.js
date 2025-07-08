import Keypad from "./keypad";
import './App.css'
import { useState } from "react";

function App(){
  let [input,setInput]=useState("")
  function handleClick(value){
    setInput(input+value)
  }

  function handleEval(){
    let output=eval(input)
    setInput(output)
  }
  function handleClear(){
    setInput("")
  }
  return(
    <div className="container">
      <h1>Calculator App in react</h1>
      <div className="calculator">
        <input type='text'  value={input}  className="output"></input>
        <Keypad handleClick={handleClick} handleEval={handleEval} handleClear={handleClear}></Keypad>
      </div>
    </div>
  )
}

export default App;