import React, { useState, useEffect } from 'react';
import './App.css'
function App() {
  const [hrs, setHrs] = useState(0);
  const [mins, setMins] = useState(0);
  const [sec, setSec] = useState(0);
  const [running, setRunning] = useState(false);

  useEffect(() => {
    let intervalId;
    if (running) {
      intervalId = setInterval(() => {
        setSec(oldSec => {
          if (oldSec === 59) {
            setMins(prevMins => {
              if (prevMins === 59) {
                setHrs(prevHrs => prevHrs + 1);
                return 0; // Reset minutes to 0
              } else {
                return prevMins + 1;
              }
            });
            return 0; // Reset seconds to 0
          } else {
            return oldSec + 1;
          }
        });
      }, 1000);
    }

    return () => clearInterval(intervalId);
  }, [running]);

  const handleStart = () => {
    setRunning(true);
  };

  const handleReset = () => {
    setRunning(false);
    setHrs(0);
    setMins(0);
    setSec(0);
  };

  const handlePause = () => {
    setRunning(false);
  };

  return (
    <>
      <div className="btns">
        <button onClick={handleStart}>Start</button>
        <button onClick={handleReset}>Reset</button>
        <button onClick={handlePause}>Pause</button>
      </div>

      <div className="clock">
        <h1>{hrs}:</h1>
        <h1>{mins}:</h1>
        <h1>{sec}</h1>
      </div>
    </>
  );
}

export default App;
