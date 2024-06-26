import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useEffect } from 'react'

function App() {
  const [count, setCount] = useState(0)
  const [running,setRunning] = useState(false)
  useEffect(() => {
    let interval;
    if (running) {
      interval = setInterval(() => {
        setCount((c) => {
          if (c === 0) {
            setRunning(false);
            clearInterval(interval); // Clear interval when timer reaches 0
            return 0;
          } else {
            return c - 1;
          }
        });
      }, 1000);
    }
    
    return () => clearInterval(interval); // Clear interval on component unmount or when running becomes false
  }, [running]);
  const ontimer =()=>{
    setRunning(true)

  }
  const pause =()=>{
   
    setRunning(false)
  
  }
  return (
    <>
    <h1>
    Timer in Minutes
    </h1>
     
      <input type="number"  placeholder='0' onChange={(e) => parseInt(setCount(e.target.value)*60)}
/>
      <button onClick={ontimer}>SetTimer/Start</button>
      <button onClick={pause}>Pause</button>
      <h2>{count}</h2>
    </>
  )
}

export default App
