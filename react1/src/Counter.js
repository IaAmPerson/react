import React, {useState} from 'react';





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
		<button onClick={(handleClickPlus)}>Plus 1</button>
        <button onClick={(handleClickMinus)}>Minus 1</button>
        <button onClick={(handleClickReset)}>Reset</button>

		</div>
	)
	}}
export default Counter;