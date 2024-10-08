import React from "react";
import "./App.css";
import { useState } from "react";

const App = () => {
  const [value, setValue] = useState(0);


  function Increment() {
    setValue(value + 1);
  }

  function Decrement() {
    setValue(value - 1);
  }
  function Reset() {
    setValue(0);
  }

  return (
    <><div>

      <button type="button" className="editt" onClick={Increment}>
        Increment
      </button>
      <button type="button" className="editt" onClick={Decrement}>
        Decrement
      </button>
      <button type="button" className="editt" onClick={Reset}>
        Reset
      </button>
    </div>
    <div>
        <p>You Pressed {value} times </p>
      </div>
      </>
  );
  }
  export default App;

