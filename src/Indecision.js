import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom'

const Indecision =() => {
    let idata = JSON.parse(localStorage.getItem('choices'))
    let [choices, setChoices] = useState([])
    // let [choice2] = useState([])
    let handleClick = (e) => {
        setChoices([
          ...choices,
          {
            choices
            
          }
        ])
        let submit = () => {
            localStorage.setItem('choices',JSON.stringify(choices))
        }
        let reset = () => {
            localStorage.setItem('choices',[])
        }
        // let MakeChoice = () => {

        // }
    }

}
return(
<div>
    <h1>Indecision</h1>

      
    {
        choices.map((choice) => {
            return (
            <div key={choice}>
                <p>{choice}</p>
                </div>
            
          

            
        )})
    }
    <textarea col='20' row='40' ></textarea>
      <br/>
      <button onClick={submit()}> Submit </button>
      <button onClick={reset()}> Reset </button>
      <br/>
      <button onClick={MakeChoice()}> Make Choice </button>
    </div>
    )








ReactDOM.render(<Indecision/>,root)