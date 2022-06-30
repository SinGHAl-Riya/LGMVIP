import React, {useState} from 'react';
import './App.css';

const NewComponent = () =>{
    const[result, setResult]= useState("");

    const handleClick = (e)=>{
        setResult(result.concat(e.target.name));

    }
    const clear = () =>{
        setResult("");

    }
    const backspace = () =>{
        setResult(result.slice(0, result.length - 1));

    }

    const calculate = () => {
        try{
            setResult(eval(result).toString());
        }catch(err){
            setResult("Error")
        }
        
    }
    return(
        <div>
            <div className="container">
                <form>
                    <input className="input" type="text" value={result}/>
                </form>
                <div className="keypad">
                    <button className="highlight" onClick={clear} id="clear">AC</button>
                    <button className="highlight" onClick={backspace} id="backspace">Delete</button>
                    <button name="/" className="highlight" onClick={handleClick}>&divide;</button>
                    <button name="7" className="button" onClick={handleClick}>7</button>
                    <button name="8" className="button" onClick={handleClick}>8</button>
                    <button name="9" className="button" onClick={handleClick}>9</button>
                    <button name="*" className="highlight" onClick={handleClick}>&times;</button>
                    <button name="4" className="button" onClick={handleClick}>4</button>
                    <button name="5" className="button" onClick={handleClick}>5</button>
                    <button name="6" className="button" onClick={handleClick}>6</button>
                    <button name="-" className="highlight" onClick={handleClick}>&ndash;</button>
                    <button name="1" className="button" onClick={handleClick}>1</button>
                    <button name="2" className="button" onClick={handleClick}>2</button>
                    <button name="3" className="button" onClick={handleClick}>3</button>
                    <button name="+" className="highlight" onClick={handleClick}>+</button>
                    <button name="0" className="button" onClick={handleClick}>0</button>
                    <button name="." className="button" onClick={handleClick}>.</button>
                    <button className="highlight" onClick={calculate} id="result">=</button>

                </div>
            </div>
        </div>
    )
}
export default NewComponent;