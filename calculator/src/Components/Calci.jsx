import React from 'react'
import '../App.css'
import { useState } from 'react'
function Calci() {
   const [value,setValue] = useState(0)
   const [num,setNum] = useState(0)
   


  
  return (
    <div className='body'>
        <div className="container">
  <div className="calc">
    <div className="header">
      <div className="titles">
        Simple Calculator
      </div>
    </div>
    <div className="display">
      <div className="display-indicate">
        max
      </div>
      <div className="display-main">
        0
      </div>
      
      <input onChange={(e) => { setValue(e.target.value) }} type='number' value ={value}  className="display-operations" />
        
     
    </div>

    <div className="row">
      <button className="button ac" onClick={()=>{setValue(0)}} >ac</button>
      <button className="button ce" >ce</button>
      <button className="button div">%</button>
      <button className="button mult">x</button>
    </div>

    <div className="row">
      <button className="button seven">7</button>
      <button className="button eight">8</button>
      <button className="button nine">9</button>
      <button className="button minus">−</button>
    </div>

    <div className="row">
      <button className="button four">4</button>
      <button className="button five">5</button>
      <button className="button six">6</button>
      <button className="button plus">+</button>
    </div>

    <div className="bottom-row">
      <div className="left">
        <div className="row">
          <button className="button one">1</button>
          <button className="button two">2</button>
          <button className="button three">3</button>
        </div>
        
        <div className="row">
          <button className="button zero">0</button>
          <button className="button dot">.</button>
        </div>
      </div>
      
      <div className="right">
        <div className="button eq">=</div>
      </div>

    </div>

  </div>
  
  
</div>
    </div>
  )
}

export default Calci