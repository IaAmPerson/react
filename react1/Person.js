import React from 'react';
import ReactDOM from 'react-dom'
import Person from './Person'
import NewComponent from './NewComponent'
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
		<img src={props.img}/>
		</div>
    <ul>
      {
        attributes.map((elem)=>{
          return <li key= {elem}>{elem}</li>



        })
      }
    </ul>


	
}
ReactDOM.render(<Person name={person.name} title={person.title}/>,root)
