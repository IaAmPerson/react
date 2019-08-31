import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

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
const Counter =() => {
	let [count,setState] = useState(0)
	let handleClick = () =>{
	setState(count + 1)
	}
	{
	let handleClickMinus = () =>{
	setState(count - 1)
	}
	let handleClickReset = () =>{
	setState(0)
	}

	return (
		<div>
		<p>you clicked {count} times</p>
		<button onClick={()=> console.log('clicked')}>Plus 1</button>
		</div>
	)
	}
	{
		

		
	

let attributes = {
	title: 'title',
	name: 'name',
	age: '2',
	height: '6`2',
	weight: '0kg'
}

ReactDOM.render(<Counter/>,root)