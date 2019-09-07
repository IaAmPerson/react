import react, {useState} from 'react';
import ReactDOM from 'react-dom';

let root = ReactDOM.render(<App />, document.getElementById('root'));

const Calculator = () => {
    let [display, setDisplay] = useState(0) 
	let handleClick = () =>{
	setDisplay(count + {display})
	}
	{
	let handleClickMinus = () =>{
	setDisplay(count - {display})
	}
    return
        <div>
            <h2>{display}</h2>
            <button onClick={buttonClick(1)}>1</button>
            <button onClick={buttonClick(2)}>2</button>
            <button onClick={buttonClick(3)}>3</button>
            <button onClick={buttonClick(4)}>4</button>
            <button onClick={buttonClick(5)}>5</button>
            <button onClick={buttonClick(6)}>6</button>
            <button onClick={buttonClick(7)}>7</button>
            <button onClick={buttonClick(8)}>8</button>
            <button onClick={buttonClick(9)}>9</button>
            <button >+</button>
            <button>-</button>
            <button>=</button>
        </div>
}
}
export default Calculator;