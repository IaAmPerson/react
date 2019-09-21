import React,{useState, useEffect} from 'react';
import ReactDOM from 'react-dom'

const Indecision =() => {
    let idata = JSON.parse(localStorage.getItem('choices'))
    let [choices, setChoices] = useState([])
    let [decision, setDecision] = useState([])
    // let [choice2] = useState([])
    let handleInput = (e) => {
        setInput(e.target.value)
    }
    let handleChoice = (e) => {
        setChoices([
            setChoices([...choices, input]),
            setInput('')
        ])
    let handleDecision = () => {
            let decision = Math.floor(Math.random() * choices.length)
            setDecision(choices[decision])
        }
    let handleReset = () => {
            setChoices([])
            setDecision('')
        }
        useEffect(() => {
            localStorage.setItem('choice', JSON.stringify(choices))
        })
    
        }
    }


    return (
        <div>
            <h1>Let the computer decide!</h1>

            <div className="choice">
                {choices.length === 0 ? <p>No Choices here!!??!?!?</p> :
                    <ul>

                        {choices.map((choice) => {
                            return <li key={choice}>{choice}</li>
                        })}
                    </ul>
                }
            </div>
            <p>What are your choices</p>
            <input onChange={handleInput} type="text" value={input}></input>
            <br />
            <button onClick={handleChoice}>Submit</button>
            <button onClick={handleReset}>Reset</button>

            <div className="decision">

                {
                    choices.length > 1 ? <button onClick={handleDecision}>Make My Choice!</button> : ''
                }
                {decision === '' ? <p></p> : <p>The computer has decided that you shall! <br/>{decision}</p>}

            </div>



        </div>


    )


ReactDOM.render(<Indecision/>,root)