import React from 'react'
import { useState } from 'react'

function File() {
    const [value,setValue] = useState('')
    const[todo,setTodos] = useState([]) 
    const validate =()=>{
        if(value.length===0){
            alert("Please enter a file name")
        }
        else{
            setTodos(prev =>[...prev,value])
            setValue('')
        }

      
    }
    const deleteTodo = (index) => {
        setTodos(all => all.filter((_, i) => i !== index));
      };
  return (
    <div className='file'>

         <h1>

         Todo
        </h1>
        {/* <form action="">
        <textarea name="" className='comment' cols="30"  value={value} rows="50" placeholder='enter your text' onChange={e=>setValue(e.target.value)}>{value}</textarea>
       <div className="btns">

       <button type='button' onClick={validate}>+</button>
        <button type='button' onClick={() => setValue('')}>x</button>

       </div>
        
        </form>
        <ul>
        {todo.map((item, index) => (
        
          <li key={index}>{item}</li>
            
          ))}
      </ul> */}
          <textarea name="" id="" cols="30" rows="10" value={value} placeholder='enter Daily Todo Here' className='comment' onChange={e=>setValue(e.target.value)}></textarea>
          <div className="btns">
            <button onClick={validate}>Add</button>
            <button onClick={()=>{setValue('')}}>Clear</button>
          </div>
         <div className='todos'>
         {
              todo.map((item,index)=>{
                return(
                    <div className='full-todo' key= {index}>
                    <div  className='present'>{item}</div>
                    <button className='p-btn' onClick={() => deleteTodo(index)}>Delete</button>
                    </div>
                )
              })
          }


         </div>
       
        </div>
  )
}

export default File