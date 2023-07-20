import { useState } from 'react';
import './App.css';
function App() {


    const [input,setInput] = useState(''); 
    const [inputHistory, setinputHistory] = useState('');
    let date = new Date();
    const [hours, setHours] = useState(date.getHours());
    const [minutes, setMinutes] = useState(date.getMinutes());

    setInterval(() => {
        let date = new Date();
        setHours(date.getHours());
        setMinutes(date.getMinutes());
        console.log('date',date.getMinutes())
    }, 30*1000);
    

    function handleButonClick(e){
        console.log(e.target.innerText);
        let operator = e.target.innerText;
        if(operator === 'C'){
            setInput('');
            setinputHistory('');
        }
        else if(operator === '='){
            try{
                let ans = eval(input);
                if(Number.isInteger(ans)){
                }
                else{
                    ans = ans.toFixed(2);
                }
                setinputHistory(input);
                setInput(ans);
            }
            catch(error){
                alert('Oops! something went wrong.\n');
            }
        }
        else{
            setInput(input+operator)
        }
    }

    return (
        <div className="container">
            
            <div className='calc'>
                <header>
                    <div>
                        <span>{hours}:{minutes}</span>
                    </div>
                    <div>
                        <span><i class="fa-solid fa-signal"></i></span>
                        <span><i class="fa-solid fa-wifi"></i></span>                    
                        <span><i class="fa-solid fa-battery-half"></i></span>
                    </div>
                </header>
                <p>{inputHistory}</p>
                <h1> {input}</h1>

                <div>
                    <button className='clear-btn' onClick={(e)=>{handleButonClick(e)}}>C</button>
                    <button onClick={(e)=>{handleButonClick(e)}}>(</button>
                    <button onClick={(e)=>{handleButonClick(e)}}>)</button>
                    <button className="operator" onClick={(e)=>{handleButonClick(e)}}>/</button>
                </div>
                <div>
                    <button onClick={(e)=>{handleButonClick(e)}}>7</button>
                    <button onClick={(e)=>{handleButonClick(e)}}>8</button>
                    <button onClick={(e)=>{handleButonClick(e)}}>9</button>
                    <button className="operator" onClick={(e)=>{handleButonClick(e)}}>*</button>
                </div>
                <div>
                    <button onClick={(e)=>{handleButonClick(e)}}>4</button>
                    <button onClick={(e)=>{handleButonClick(e)}}>5</button>
                    <button onClick={(e)=>{handleButonClick(e)}}>6</button>
                    <button className="operator" onClick={(e)=>{handleButonClick(e)}}>-</button>
                </div>
                <div>
                    <button onClick={(e)=>{handleButonClick(e)}}>1</button>
                    <button onClick={(e)=>{handleButonClick(e)}}>2</button>
                    <button onClick={(e)=>{handleButonClick(e)}}>3</button>
                    <button className="operator" onClick={(e)=>{handleButonClick(e)}}>+</button>
                </div>
                <div>
                    <button onClick={(e)=>{handleButonClick(e)}}>0</button>
                    <button onClick={(e)=>{handleButonClick(e)}}>00</button>
                    <button onClick={(e)=>{handleButonClick(e)}}>.</button>
                    <button className="equal" onClick={(e)=>{handleButonClick(e)}}>=</button>
                </div>

                
            </div>
        </div>
    );
}

export default App;
