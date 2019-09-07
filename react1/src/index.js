import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counter from './src/Counter'
import Calcaulator from './src/Calculator.js/index.js'

let root = ReactDOM.render(<App />, document.getElementById('root'));

const Calculator = () => {
    let [display, setDisplay] = useState(0) 
    let [inputs, setInputs] = useState(0)

	let buttonClick = (num) =>{
        return () => {
            if (inputs === 0) {
                setInputs(num)
            }
            else {
                setInputs(inputs + num)
            }

        }
    }
    let execute = () => {
        setDisplay(eval())

    }



    return
        <div>
            <h2>{display}</h2>
            <h1>{inputs}</h1>
        </div>
        <div className='layout'>
            <button className='button' onClick={buttonClick(1)}>1</button>
            <button className='button' onClick={buttonClick(2)}>2</button>
            <button className='button' onClick={buttonClick(3)}>3</button>
            <button className='button-operator' onClick={buttonClick('+')}>+</button>

            <button className='button' onClick={buttonClick(4)}>4</button>
            <button className='button' onClick={buttonClick(5)}>5</button>
            <button className='button' onClick={buttonClick(6)}>6</button>
            <button className='button-operator' onClick={buttonClick('-')}>-</button>


            <button className='button' onClick={buttonClick(7)}>7</button>
            <button className='button' onClick={buttonClick(8)}>8</button>
            <button className='button' onClick={buttonClick(9)}>9</button>
            <button className='button-operator' onClick={buttonClick('/')}>/</button>



            <button className='button' onClick={buttonClick(0)}>0</button>
            
        </div>
}
}






		
	


ReactDOM.render(<Calculator/>,root)