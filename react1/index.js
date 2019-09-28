import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import Counter from './src/Counter';
// import Calcaulator from './src/Calculator.js/index.js';
// import NoteApp from './NoteApp.js';
import PhotoAlbum from './PhotoAlbum'

let root = document.getElementById('root');

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
}


    
		
	


ReactDOM.render(<PhotoAlbum/>,root)