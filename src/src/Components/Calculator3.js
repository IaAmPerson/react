import React, { useState, useEffect } from 'react';
import "../Css/Calculator.css";

const Calculator3 = () => {
    let [display, setDisplay] = useState(0)
    let [inputs, setInputs] = useState(0)

    let inputChange =(e)=> {
        setDisplay(e.target.value)
        
        
    }
    
    

    let execute = (e) => {
        setDisplay(eval(inputs))  
        
    }
    
    return (
        <div>
            {/* <h1 onKeyPress={keyPress}>{display}</h1> */}
            {/* <input type="text" value={display} onChange={inputChange}></input> */}
            <h1>{execute}</h1>
            <form oninput="x.value=parseInt(a.value)+parseInt(b.value)">
                <input type="number" id="a" onChange={inputChange}/>+
                <input type="number" id="b" onChange={inputChange}/>
                <output name="x" for="a b"/>
                
            </form>
            
            <button className="button" onClick={execute}> = </button>
         
          {/* <button onClick={reset}> Reset </button> */}
        </div>
    
    )
}


export default Calculator3