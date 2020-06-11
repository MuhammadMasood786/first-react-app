import React, { useState } from 'react';
import './App.css';
import { Button } from 'reactstrap';


function App() {
  let [count, setCount] = useState(0);
  let [isMorning, setMorning] = useState(true);
  return (
    <div className="container box mt-2">
      <div className="row justify-content-center  mt-5">
        <h3><i>Good {isMorning ? 'Morning' : 'Night'}</i></h3>
      </div>
      <div className="row justify-content-center  mt-2">
        <Button outline onClick={() => setMorning(!isMorning)} color="success">Day Time</Button>
      </div>
      <div className="row justify-content-center  mt-5 ">
        <h3>{isMorning ? <i class="fa fa-lightbulb-o onBulb mr-5" aria-hidden="true"></i> : <i class="fa fa-lightbulb-o ofBulb mr-5" aria-hidden="true"></i>}</h3>
      </div>
      <div className="row justify-content-center  mt-5">
        <h3> Counter: {count}</h3>
      </div>
      <div className="row justify-content-center  mt-2">
        <Button outline onClick={() => setCount(count + 1)} color="success">Update Counter</Button>
      </div>
    </div>
  );
}


export default App;