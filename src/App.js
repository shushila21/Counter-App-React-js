import React, { useState } from 'react';
import './App.css';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
      <div className="container">
        <h1 style={{ backgroundColor: "#3BDEF1", fontSize: "50px", padding: "20px", color: "white", fontFamily: "cursive", marginTop: "0" }}>COUNTER APP</h1>
        <h1 style={{ fontSize: "40px", color: "#505050" }}>COUNT : {count}</h1>

        <button className="button" onClick={() => setCount(count + 1)} >Count + 1</button>
        <button className="button" onClick={() => {
          if (count <= 0) {
            setCount(0)
          } else {
            setCount(count - 1)
          }
        }} >Count - 1</button>
        <br></br>
        <button className="button" onClick={() => setCount(count + 5)} >Count + 5</button>
        <button className="button" onClick={() => setCount(count + 10)} >Count + 10</button>
        <button className="button" onClick={() => setCount(count + 100)} >Count + 100</button>
        <br></br>
        <button className="button" onClick={() => setCount(count - 5)} >Count - 5</button>
        <button className="button" onClick={() => setCount(count - 10)} >Count - 10</button>
        <button className="button" onClick={() => setCount(count - 100)} >Count - 100</button>
        <br></br>
        <button className="button" onClick={() => setCount(0)} >Reset to 0</button>
      </div>
    </>
  );
}

export default App;
