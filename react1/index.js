import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import Counter from './src/Counter'
import Calcaulator from './src/Calculator.js/index.js'

let root = ReactDOM.render(<App />, document.getElementById('root'));

let person = {
	name: Person,
	title: title
}



const Person = ({title,name,age,img}) => {
	return (
		<div>
		<p>{name}</p>
		<p>{title}</p>
		<p>Age: {age}</p>
		<img src={img}/>
		</div>


	)
}


		
	

let attributes = {
	title: 'title',
	name: 'name',
	age: '2',
	height: '6`2',
	weight: '0kg'
}

ReactDOM.render(<Counter/>,root)