import {useState} from 'react'
import './App.css'

function App(){
  const[input, setInput]=useState(0)


  const handleClick=(value)=>{
    setInput((prev)=> prev+value);
  };

  const clearAll=()=>{
    setInput("")
  };
  const deleteLast=()=>{
    setInput((prev)=> prev.slice(0, -1))
  };
  const calculateResult=()=>{
    try{
      setInput(eval(input).toString());
      
    }catch{
      setInput("error");
    }
  };

  return(
    <div className='calculator'>

      <div className='display'>
        {input || "0"}
         </div>

        <div className='buttons'> 
          
          <button className='operator' onClick={clearAll}>AC</button>
          <button className='operator' onClick={deleteLast}>DEL</button>
          <button className='operator' onClick={()=>handleClick("%")}>%</button>
          <button className='operator' onClick={()=> handleClick("/")}>Div</button>


          <button onClick={()=>handleClick("7")}>7</button>
          <button onClick={()=>handleClick("8")}>8</button>
          <button onClick={()=>handleClick("9")}>9</button>
          <button className='operator' onClick={()=> handleClick("*")}>mul</button>

          <button onClick={()=>handleClick("4")}>4</button>
          <button onClick={()=>handleClick("5")}>5</button>
          <button onClick={()=>handleClick("6")}>6</button>
          <button className='operator' onClick={()=> handleClick("-")}>sub</button>

          <button onClick={()=>handleClick("1")}>1</button>
          <button onClick={()=>handleClick("2")}>2</button>
          <button onClick={()=>handleClick("3")}>3</button>
          <button className='operator' onClick={()=> handleClick("+")}>Add</button>

          <button  onClick={()=>handleClick("0")}>0</button>
          <button onClick={()=>handleClick("00")}>00</button>
          <button onClick={()=>handleClick(".")}>.</button>
          <button onClick={calculateResult}>=</button>

          
          
         
      </div>
    </div>
  )
}
export default App 